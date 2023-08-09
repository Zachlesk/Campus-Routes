import { Router } from 'express';
import { check } from 'express-validator';

import { validationDocuments } from '../middlewares/validate.documents.js';

import { getCampers, postCampers, deleteCampers, putCampers } from '../controllers/camper.controller.js';

const router = Router();

router.get('/',
    check()
,getCampers); 

router.post('/',
    check('nombre', 'Name invalid').not().isEmpty(),
    validationDocuments
,postCampers); 

router.delete('/',
    deleteCampers
)

router.put('/',
    putCampers
)

export default router;
