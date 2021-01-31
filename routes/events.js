/**
 * Rutas Events
 * host + /api/events
 */
import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt";
import { actualizarEvento, crearEvento, eliminarEvento, getEventos } from "../controllers/events";


const router = Router();

//En todas las peticiones se debe validar token 
router.use( validarJWT )

router.get('/',
  getEventos
);


router.post('/',
  crearEvento,
)

router.put('/:id',
  actualizarEvento,
)


router.delete('/:id',
  eliminarEvento,
)

export default router;