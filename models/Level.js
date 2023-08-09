import {Schema, model} from 'mongoose';

const levelSchema = Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    ruta: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'ruta',
        trim: true,
    },
    duracion: {
        type: String,
        required: true,
        default: true,
        trim: true
    }
})

const Level = model('levels', levelSchema);

export default Level;