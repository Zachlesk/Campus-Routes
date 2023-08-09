import Centros from '../models/Centro.js'

export const getCentros = async ()=> {
    try {
        const centros = await Centros.find();
        res.json(centros)
    } catch (error) {
       console.log(error.message); 
    }

}

export const postCentros = async (req, res)=> {
    try {
        const centros = new Centros(req.body);
        const nuevoCentro = await centros.save();
        res.json(nuevoCentro);
    } catch (error) {
        console.log(error.message);
    }

}

export const putCentros = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const centros = await Centros.findByIdAndUpdate( id, resto );

    res.json({
        msg:"¡El centro ha sido actualizado!",
        centros : centros
    });

}

export const deleteCentros = async (req, res) => {
    try {
        const id= req.params.id;
        const centros = await Centros.findOneById(id);
        if(centros){
            await Centros.findById(id);
            res.json(
                message = 'Centros deleted'
            )
        }else {
            console.log('Centros not found');
        }
    } catch (error) {
        res.json({
            message: 'Error deleting',
        })
    }

}