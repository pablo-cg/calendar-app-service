import { response } from 'express';
import { Evento } from '../models/evento.js';

export async function getEvents(req, resp = response) {
  const events = await Evento.find().populate('user', 'name');

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
  resp.status(200).json({
    ok: true,
    msg: 'updateEvent',
  });
}

export async function deleteEvent(req, resp = response) {
  resp.status(200).json({
    ok: true,
    msg: 'deleteEvent',
  });
}
