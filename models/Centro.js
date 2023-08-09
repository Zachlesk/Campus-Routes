import mongoose from 'mongoose';

const centroSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
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

const Centros = mongoose.model('centros', centroSchema);

export default Centros;