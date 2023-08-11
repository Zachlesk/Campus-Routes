import { response } from 'express';
import Camper from '../models/Camper.js';
import bcryptjs from 'bcryptjs';

import { generateJWT } from '../helpers/generateJWT.js';

export const validaciones = async (req, res = response)=>{

    const {email, password} = req.body;
    try {

        const camper = await Camper.findOne({email});

        if (!camper){
            return res.status(400).json({
                msg:"Camper no es correcto"
            })
        }

        if (!camper.estado){
            return res.status(400).json({
                msg:"El estado es inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, camper.password);
        if (!validPassword){
            return res.status(400).json({
                msg:"El password es incorrecto"
            })
        }

        const token = await generateJWT(camper.id)

        res.json({
           camper,
           token
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"Error generating JSON-WEB-TOKEN"
        })
    }
}

export default validaciones;