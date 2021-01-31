import { model, Schema } from "mongoose";


const EventoShema = Schema({

  title: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  //Asociación con modelo Usuario
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  }


})

export const Evento = model('Evento', EventoShema )