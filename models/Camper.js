import {Schema, model} from 'mongoose';

const camperSchema = Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    tipoIdentificacion: {
        type: String,
        required: true,
        trim: true,
    },
    nroIdentificaciom: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    levelState: {
        type: String,
        trim: true
    },
    estado: {
        type: Boolean,
        trim: true,
        required: true
    },
    imagen: {
        type: String,
    },
    rol: {
        type: Schema.Types.ObjectId,
        trim: true,
    },
    promedio: {
        type: Number,
        required: true
    }
})

const Camper = model('campers', camperSchema);

export default Camper;