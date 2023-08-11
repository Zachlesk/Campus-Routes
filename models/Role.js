import {Schema, model} from 'mongoose';

const rolSchema = Schema({
    rol:{
        type: String,
        required: true,
        enum: ['CAMPER', 'TRAINER', 'GERENTE'],
        default: ['CAMPER']
    }
})

const Role = model('roles', rolSchema);

export default Role;