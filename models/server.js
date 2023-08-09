import express from 'express';
import cors from 'cors';
import conexion from '../config/config.js'
import centrosRoutes from '../routes/centro.routes.js' 


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            centrosPath : '/api/centros',
            rutasPath : '/api/rutas',
            levelsPath: '/api/levels',
            campersPath : '/api/campers',
        }
        this.conexion();
        this.middlewares();
        this.routes();

    }

    async conexion() {
        await conexion();
    }

    routes(){
        this.app.use(this.paths.centrosPath, centrosRoutes);
    } 

    middlewares() {
        this.app.use(cors);
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Listening on port ${this.port}`);
        })
    }
}

export default Server;