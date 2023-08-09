import mongoose from 'mongoose';

const conexion = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to server`);
    } catch (error) {
        console.log(error.message)
    }
}

export default conexion;