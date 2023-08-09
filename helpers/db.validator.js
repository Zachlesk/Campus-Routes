import Role from '../models/Role.js';
import Camper from '../models/Camper.js';

const validRol = async (rol='')=> { 
    const existeRol = Role.finOne({rol});
    if(!existeRol) {
        
        console.log('El rol no existe en la base de datos');
    }
}