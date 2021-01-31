/**
 * Rutas Events
 * host + /api/events
 */
import { Router } from "express";
import { check } from "express-validator";
import { validarJWT } from "../middlewares/validar-jwt";
import { actualizarEvento, crearEvento, eliminarEvento, getEventos } from "../controllers/events";
import validarCampos from "../middlewares/validar-campos";
import { isDate } from "../helpers/isDate";


const router = Router();

//En todas las peticiones se debe validar token 
router.use(validarJWT)

router.get('/',
  getEventos
);


router.post('/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos,
  ],
  crearEvento,
)

router.put('/:id',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos,
  ],
  actualizarEvento,
)


router.delete('/:id',
  eliminarEvento,
)

export default router;