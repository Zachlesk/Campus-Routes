import Ruta from '../models/Ruta.js'

export const getRutas = async ()=> {
    try {
        const rutas = await Ruta.find().populate(
            'centro', ['id', 'nombre'],
        );
        console.log(rutas);
    } catch (error) {
       console.log(error.message); 
    }

}

export const postRutas = async (req, res)=> {
    try {
        const {nombre, centro}= req.body;
        const rutas = new Level( nombre, centro); ;
        await rutas.save()
        res.json({
            "message":"¡El post ha sido validado!",
            rutas
        })
    } catch (error) {
        console.log(error.message);
    }

}


export const putRutas = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const rutas = await Ruta.findByIdAndUpdate( id, resto );

    res.json({
        msg:"¡La ruta ha sido actualizado!",
        rutas : rutas
    });

}

export const deleteRutas = async (req, res) => {
    try {
        const id= req.params.id;
        const rutas = await Ruta.findOneById(id);
        if(rutas){
            await Ruta.findById(id);
            res.json(
                message = 'Rutas deleted'
            )
        }else {
            console.log('Rutas not found');
        }
    } catch (error) {
        res.json({
            message: 'Error deleting',
        })
    }

}