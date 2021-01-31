/**
 * Rutas Auth
 * host + /api/auth
 */
import { Router } from 'express';
import { check } from 'express-validator'
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth';

const router = Router();


router.post('/new',
  [//middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
  ],
  crearUsuario
)


router.post('/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
  ],
  loginUsuario
)


router.get('/renew', revalidarToken)



export default router;