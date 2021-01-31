/**
 * Rutas Auth
 * host + /api/auth
 */
import { Router } from 'express';
import { check } from 'express-validator'
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth';
import validarCampos from '../middlewares/validar-campos';

const router = Router();


router.post('/new',
  [//middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
)


router.post('/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
)


router.get('/renew', revalidarToken)



export default router;