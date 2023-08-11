import { Router } from 'express';
import { check } from 'express-validator';

import { validationDocuments } from '../middlewares/validate.documents.js';

import { getLevels, postLevels, deleteLevels, putLevels } from '../controllers/level.controller.js';

const router = Router();

router.get('/',
    check()
,getLevels); 

router.post('/',
    check('nombre', 'Name invalid').not().isEmpty(),
    validationDocuments
,postLevels); 

router.delete('/',
    deleteLevels
)

router.put('/',
    putLevels
)

export default router;
