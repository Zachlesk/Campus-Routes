import {Schema, model} from 'mongoosee';

const rolSchema = Schema({
    rol:{
        type: String,
        required: true,
        default: ['CAMPER', 'TRAINER', 'GERENTE']
    }
})

const Centro = model('centros', centroSchema);

export default Centro;