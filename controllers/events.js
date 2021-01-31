import { response } from "express";


export const getEventos = ( req, res = response, next ) => {

  res.json({
    ok: true,
    msg: 'getEventos',
  })
}


export const crearEvento = ( req, res = response, next ) => {

  res.json({
    ok: true,
    msg: 'crearEvento',
  })
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