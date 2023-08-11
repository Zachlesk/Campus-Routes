import {Schema, model} from 'mongoose';

const levelSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    ruta: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'rutas',
        trim: true,
    },
    duracion: {
        type: String,
        required: true,
        trim: true
    }
})

const Level = model('levels', levelSchema);

export default Level;