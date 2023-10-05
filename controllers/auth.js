import { response, request } from 'express';
import { validationResult } from 'express-validator';

export function register(req, resp = response) {
  const { name, email, password } = req.body;

  resp.status(201).json({
    ok: true,
    asd: { name, email, password },
  });
}

export function login(req, resp = response) {
  const { email, password } = req.body;

  resp.status(200).json({
    ok: true,
  });
}

export function renewToken(req, resp = response) {
  resp.json({
    ok: true,
  });
}
