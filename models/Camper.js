import {Schema, model} from 'mongoose';

const camperSchema = new Schema({
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
    nroIdentificacion: {
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
        ref: 'levels',
        required: true,
        trim: true
    },
    levelState: {
        type: String,
        enum: ['finished', 'pending'],
        trim: true
    },
    estado: {
        type: Boolean,
        trim: true,
        default: true,
        required: true
    },
    imagen: {
        type: String,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'roles',
        required: true,
        trim: true  
    },
    promedio: {
        type: Number,
        required: true
    }
})

const Camper = model('campers', camperSchema);

export default Camper;