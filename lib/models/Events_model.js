import { model, Schema } from "mongoose";


const EventoShema = Schema({

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
  //Asociación con modelo Usuario
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  }

})

EventoShema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;

  return object;
});

export const Evento = model('Evento', EventoShema )