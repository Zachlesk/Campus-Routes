import { Router } from 'express';
import { check } from 'express-validator';
import { validaciones } from '../controllers/auth.controller.js';

import { validationDocuments } from '../middlewares/validate.documents.js';

const router = Router();

router.post(
    '/autenticacion',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
    ],
    validaciones
);

export default router;