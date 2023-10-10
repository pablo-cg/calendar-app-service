import { response } from 'express';

export async function getEvents(req, resp = response) {
  resp.status(200).json({
    ok: true,
    msg: 'getEvents',
  });
}

export async function createEvent(req, resp = response) {
  resp.status(201).json({
    ok: true,
    msg: 'createEvent',
  });
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
