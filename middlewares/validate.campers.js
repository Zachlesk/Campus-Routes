import { body, validationResult } from 'express-validator';
import Camper from '../models/Camper.js';

export const validateCamper = [
    body('nombre').notEmpty(),
    body('tipoIdentificacion').isIn(['T.I', 'C.C']),
    body('nroIdentificacion').isLength({ min: 10, max: 10 }),
    body('email').isEmail().custom(async (value) => {
        let existe = await Camper.findOne({ email: value });
        if (existe) {
            throw new Error('El email digitado ya se encuentra registrado');
        }
        return true;
    }),
    body('password').isLength({ min: 8 }),
    async (req, res, next) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if ( req.camper && req.camper.rol !== 'GERENTE') {
            return res.status(403).json({ message: 'Acceso denegado'});
        }
        next();
    }
];
export const validateDeletePermissions = async (req, res, next) => {
    if (req.camper && req.camper.rol !== 'gerenteRol') {
        let existingCamper = await Camper.findById(req.params.id);
        if (!existingCamper) {
            return res.status(404).json({ message: 'Camper no encontrado' });
        }
        next();
    } else {
        res.status(403).json({ message: 'Acceso no autorizado' });
    }
};
export const validateUpdatePermissions = async (req, res, next) => {
    if (req.camper && req.camper.rol !== 'GERENTE' || req.camper && req.camper.rol !== 'TRAINER') {
        let existingCamper = await Camper.findById(req.params.id);
        if (!existingCamper) {
            return res.status(404).json({ message: 'Camper no encontrado' });
        }
        next();
    } else {
        res.status(403).json({ message: 'Acceso no autorizado' });
    }
};