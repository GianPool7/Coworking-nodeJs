import app from './app.js';
import { sequelize } from './models/index.js';

const conexion=async()=>{
    try {
        await sequelize.sync({force:false})
        app.listen(4000)
        console.log("el servicio esta corriendo en el puerto 4000");
    } catch (error) {
        console.log("error al iniciar la conexion: ",error);
    }
}

conexion()

