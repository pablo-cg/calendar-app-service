import { response } from 'express';
import jwt from 'jsonwebtoken';

export function validarJwt(req, resp = response, next) {
  // header x-token

  const token = req.header('x-token');

  if (!token) {
    return resp.status(401).json({
      ok: false,
      msg: 'Unauthorized',
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return resp.status(401).json({
      ok: false,
      msg: 'Unauthorized',
    });
  }

  next();
}
