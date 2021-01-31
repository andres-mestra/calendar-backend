import { response } from "express";
import { Evento } from "../models/Events_model";


export const getEventos = async (req, res = response, next) => {
  
  const userUid = req.uid;

  const eventos = await Evento.find({ user: userUid })
    .populate('user', 'name')

  return res.json({
    ok: true,
    eventos,
  })
}


export const crearEvento = async (req, res = response, next) => {

  const evento = new Evento(req.body);

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


export const actualizarEvento = async (req, res = response, next) => {

  const eventoId = req.params?.id

  try {

    const evento = await Evento.findById(eventoId)
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id',
      })
    }

    //Usuario token
    const uid = req.uid;

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      })
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    }

    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
    );

    return res.json({
      ok: true,
      evento: eventoActualizado,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }

}


export const eliminarEvento = async (req, res = response, next) => {

  const eventoId = req.params?.id

  try {

    const evento = await Evento.findById(eventoId)
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id',
      })
    }

    //Usuario token
    const uid = req.uid;

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de eliminar este evento'
      })
    }

    const eventoEliminado = await Evento.findByIdAndRemove(eventoId)

    return res.json({
      ok: true,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}