import { response } from "express";
import { Evento } from "../models/Events_model";


export const getEventos = ( req, res = response, next ) => {

  res.json({
    ok: true,
    msg: 'getEventos',
  })
}


export const crearEvento = async ( req, res = response, next ) => {
  
  const evento = new Evento( req.body );  
  
  // req.uid : definido por el middleware validarJWT
  evento.user = req.uid;

  try {

    const eventoGuardado = await evento.save();

    return res.json({
      ok: true,
      evento: eventoGuardado,
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }

}


export const actualizarEvento = ( req, res = response, next ) => {

  res.json({
    ok: true,
    msg: 'actualizarEvento',
  })
}


export const eliminarEvento = ( req, res = response, next ) => {

  res.json({
    ok: true,
    msg: 'eliminarEvento',
  })
}