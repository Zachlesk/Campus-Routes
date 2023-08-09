const { response } = require('express');
const Camper = require('../models/Camper.js');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate.JWT.js');

export const validaciones = async (req, res=response)=>{

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

        const validPassword = bcryptjs.compareSync(password, usuario.password);
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
