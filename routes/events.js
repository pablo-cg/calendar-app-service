/* 
  /api/events 
*/
import { Router } from 'express';
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from '../controllers/events.js';
import { validarJwt } from '../middlewares/validar-jwt.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { isDate } from '../helpers/date-helper.js';

const router = Router();

router.use(validarJwt);

// Get Eventos GET '/'
router.get('/', [], getEvents);

// Crear evento POST '/'
router.post('/', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  check('start', 'La fecha de inicio es obligatoria').custom(isDate),
  check('end', 'La fecha de fin es obligatoria').custom(isDate),
  validarCampos
], createEvent);

// Actualizar evento PUT '/:id'
router.put('/:id', [], updateEvent);

// borrar evento DELETE '/:id'
router.delete('/:id', [], deleteEvent);

export default router;
