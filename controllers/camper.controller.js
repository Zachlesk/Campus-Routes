import Camper from '../models/Camper.js';
import bcryptjs from 'bcryptjs'

export const getCampers = async(req, res)=>{
    const { hasta, desde } = req.query;
    const query = { estado: true };


    const [ total, campers ] = await Promise.all([
        Camper.countDocuments(query),
        Camper.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        campers
    });
}

export const postCampers = async (req, res)=>{

    const {nombre, tipoIdentificacion, nroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio} = req.body;
    const campers = new Camper({nombre, tipoIdentificacion, nroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio});

     
    const salt = bcryptjs.genSaltSync();
    campers.password = bcryptjs.hashSync(password, salt);
    
    await usuario.save();
    res.json({
        "message":"¡El post ha sido validado!",
        campers
    })
}

export const deleteCampers = async (req, res)=>{
    const {id} = req.params
    const camper = await Camper.findByIdAndUpdate( id, { estado: false } );
    res.json(camper)
}

export const putCampers = async (req, res)=>{
    const { id } = req.params;
    const { _id, password, email, ...resto } = req.body;

    if ( password ) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }
    const camper = await Camper.findByIdAndUpdate( id, resto );

    res.json({
        msg:"¡El camper ha sido actualizado!",
        camper : camper
    });

}

