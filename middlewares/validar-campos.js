import { validationResult } from 'express-validator';
import { response } from 'express';

export function validarCampos(req, resp = response, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return resp.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
}
