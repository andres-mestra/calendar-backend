import { response } from 'express';
import { Usuario } from '../models/Usuario_model';

export const crearUsuario = async (req, res = response) => {

  //const { name, email, password } = req.body
  try {

    const usuario = new Usuario(req.body)
    await usuario.save();

    res.status(201).json({
      ok: true,
      msg: 'registro',
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    })
  }
}

export const loginUsuario = (req, res = response) => {

  const { email, password } = req.body

  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  })
}

export const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}