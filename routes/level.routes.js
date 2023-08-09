import { Router } from 'express';
import { check } from 'express-validator';

import { validationDocuments } from '../middlewares/validate.documents.js';

import { getLevels, postLevels } from '../controllers/level.controller.js';

const router = Router();

router.get('/',
    check()
,getCentros); 

router.post('/',
    check('nombre', 'Name invalid').not().isEmpty(),
    validationDocuments
,postCentros); 

router.delete('/',

    deleteCentros
)

router.put('/',
    putCentros
)

export default router;
