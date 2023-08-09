import Level from '../models/Level.js'

export const getLevels = async ()=> {
    try {
        const levels = await Level.find().populate(
            'ruta', ['id', 'nombre'],
        );
        console.log(levels);
    } catch (error) {
       console.log(error.message); 
    }

}

export const postLevels = async (req, res)=> {
    try {
        const {nombre, ruta, duracion}= req.body;
        const levels = new Level( nombre, ruta, duracion) ;
        await levels.save()
        res.json({
            "message":"¡El post ha sido validado!",
            centros
        })
    } catch (error) {
        console.log(error.message);
    }

}


export const putLevels = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const levels = await Level.findByIdAndUpdate( id, resto );

    res.json({
        msg:"¡El level ha sido actualizado!",
        levels : levels
    });

}

export const deleteLevels = async (req, res) => {
    try {
        const id= req.params.id;
        const levels = await Level.findOneById(id);
        if(levels){
            await Level.findById(id);
            res.json(
                message = 'Levels deleted'
            )
        }else {
            console.log('Levels not found');
        }
    } catch (error) {
        res.json({
            message: 'Error deleting',
        })
    }

}