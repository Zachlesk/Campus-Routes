import {Schema, model} from 'mongoose';

const rutaSchema = Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    centro: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'centros',
        trim: true,
    }
})

const Ruta = model('rutas', rutaSchema);

export default Ruta;