import {Schema, model}  from 'mongoose';

const centroSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    estado: {
        type: String,
        required: true,
        default: true,
        trim: true
    },
    ciudad: {
        type: String, 
        required: true,
        trim: true
    }
})

const Centros = model('centros', centroSchema);

export default Centros;