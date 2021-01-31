import { Schema, model } from "mongoose";


const UsuarioShema = Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }

})

export const Usuario = model('Usuario', UsuarioShema )