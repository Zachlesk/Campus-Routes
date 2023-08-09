import { response, request } from 'express';
import jwt from 'jsonwebtoken';
import Camper from '../models/Camper.js';


const validateJWT = async (res = response, request = request, next) => {
    const token = req.header('x-api-token-jet')

    if (!token){
        return res.status(400).send({
            msg: "No hay token"
        })
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRET_ON_PRIVATE_KEY);
        const camper = await Camper.findOne()
    }catch {
        console.log(error)
    }
}