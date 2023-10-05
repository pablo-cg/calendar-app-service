/* 
  /api/auth 
*/

import { Router } from 'express';
import { login, register, renewToken } from '../controllers/auth.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router();

router.post(
  '/register',
  [
    check('name', 'name es obligatorio').not().isEmpty(),
    check('email', 'email es obligatorio').isEmail(),
    check('password', 'password debe ser de 6 carácteres mínimo').isLength({
      min: 6,
    }),
    validarCampos,
  ],
  register,
);

router.post(
  '/',
  [
    check('email', 'email es obligatorio').isEmail(),
    check('password', 'password es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  login,
);
router.get('/token', renewToken);

export default router;
