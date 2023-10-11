import { response } from 'express';
import { Usuario } from '../models/usuario.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../helpers/jwt.js';

export async function register(req, resp = response) {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return resp.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario con ese email',
      });
    }

    usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync(10);

    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    const token = await generateToken({ uid: usuario.id, name: usuario.name });

    resp.status(201).json({
      ok: true,
      token,
      user: {
        uid: usuario.id,
        name: usuario.name,
      },
    });
  } catch (error) {
    console.log(error);

    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado...',
    });
  }
}

export async function login(req, resp = response) {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return resp.status(400).json({
        ok: false,
        msg: 'Usuario o contraseña no válido',
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, usuario.password);

    if (!isPasswordValid) {
      return resp.status(400).json({
        ok: false,
        msg: 'Usuario o contraseña no válido',
      });
    }

    const token = await generateToken({ uid: usuario.id, name: usuario.name });

    resp.status(200).json({
      ok: true,
      token,
      user: {
        uid: usuario.id,
        name: usuario.name,
      },
    });
  } catch (error) {
    console.log(error);

    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado...',
    });
  }
}

export async function renewToken(req, resp = response) {
  const { uid, name } = req;

  const token = await generateToken({ uid, name });

  resp.json({
    ok: true,
    token,
    user: { uid, name },
  });
}
