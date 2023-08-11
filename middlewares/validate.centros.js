
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Level from '../models/Level';

export const validateLevelPost = [
    body('nombre', 'El nombre del nivel es obligatorio').notEmpty(),
    (req, res, next) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
export const validateLevelPut = [
    (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }
        next();
    },
    async (req, res, next) => {
        let existingLevel = await Level.findById(req.params.id);
        if (!existingLevel) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }
        next();
    },
    (req, res, next) => {
        if (req.camper && req.camper.rol !== 'CAMPER' && req.camper && req.camper.rol !== 'TRAINER') {
            return res.status(403).json({ message: 'Acceso no autorizado' });
        }
        next();
    },
    (req, res, next) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];