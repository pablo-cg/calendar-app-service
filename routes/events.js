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

const router = Router();

router.use(validarJwt);

// Get Eventos GET '/'
router.get('/', [], getEvents);

// Crear evento POST '/'
router.post('/', [], createEvent);

// Actualizar evento PUT '/:id'
router.put('/:id', [], updateEvent);

// borrar evento DELETE '/:id'
router.delete('/:id', [], deleteEvent);

export default router;
