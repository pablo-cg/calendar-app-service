import { model, Schema } from 'mongoose';

const EventoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

function toJSON() {
  const { __v, _id, ...data } = this.toObject();

  data.id = _id;

  return data;
}

EventoSchema.method('toJSON', toJSON);

export const Evento = model('Evento', EventoSchema);
