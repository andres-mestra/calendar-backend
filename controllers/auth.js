import argon2 from 'argon2';
import { response } from 'express';
import { Usuario } from '../models/Usuario_model';

export const crearUsuario = async (req, res = response) => {

  const { email, password } = req.body
  try {

    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con este email'
      })
    }

    usuario = new Usuario(req.body);
    //Encriptar contraseña
    usuario.password = await argon2.hash(password)
    //Guardar usuario 
    await usuario.save();

    return res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    })
  }
}

export const loginUsuario = async (req, res = response) => {

  const { email, password } = req.body

  try {

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con este email'
      })
    }
    
    const validPassword = await argon2.verify( usuario.password, password);

    if( !validPassword ){
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto',
      })
    }

    return res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    })
  }
}


export const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}