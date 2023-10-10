import { response } from 'express';
import { Evento } from '../models/evento.js';

export async function getEvents(req, resp = response) {
  const userId = req.uid;
  const events = await Evento.find({ user: userId }).populate('user', 'name');

  resp.status(200).json({
    ok: true,
    events,
  });
}

export async function createEvent(req, resp = response) {
  try {
    const event = new Evento(req.body);

    event.user = req.uid;

    const newEvent = await event.save();

    resp.status(201).json({
      ok: true,
      event: newEvent,
    });
  } catch (error) {
    console.log(error);

    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado...',
    });
  }
}

export async function updateEvent(req, resp = response) {
  try {
    const eventId = req.params.id;
    const userId = req.uid;

    const foundEvent = await Evento.findById(eventId);

    if (!foundEvent) {
      return resp.status(404).json({
        ok: false,
        msg: 'El evento no existe',
      });
    }

    if (foundEvent.user.toString() !== userId) {
      return resp.status(401).json({
        ok: false,
        msg: 'No tienes permiso para realizar esta acción',
      });
    }

    const newEvent = {
      ...req.body,
      user: userId,
    };

    const updatedEvent = await Evento.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    resp.status(200).json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);

    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado...',
    });
  }
}

export async function deleteEvent(req, resp = response) {
  try {
    const eventId = req.params.id;
    const userId = req.uid;

    const foundEvent = await Evento.findById(eventId);

    if (!foundEvent) {
      return resp.status(404).json({
        ok: false,
        msg: 'El evento no existe',
      });
    }

    if (foundEvent.user.toString() !== userId) {
      return resp.status(401).json({
        ok: false,
        msg: 'No tienes permiso para realizar esta acción',
      });
    }

    await Evento.findByIdAndDelete(eventId);

    resp.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);

    resp.status(500).json({
      ok: false,
      msg: 'Error inesperado...',
    });
  }
}
