import express from 'express';
import cors from 'cors';
import conexion from '../config/config.js'
import centrosRoutes from '../routes/centro.routes.js' 
import levelsRoutes from '../routes/level.routes.js';
import rutasRoutes from '../routes/ruta.routes.js';
import camperRoutes from '../routes/camper.routes.js';
import authRoutes from '../routes/auth.routes.js';


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
        this.conexionDB();
        this.middlewares();
        this.routes();

    }

    async conexionDB() {
        await conexion();
    }

    routes(){
        this.app.use(this.paths.centrosPath, centrosRoutes);
        this.app.use(this.paths.rutasPath, rutasRoutes);
        this.app.use(this.paths.levelsPath, levelsRoutes);
        this.app.use(this.paths.campersPath, camperRoutes);
/*         this.app.use(this.paths.authPath, authRoutes); */
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