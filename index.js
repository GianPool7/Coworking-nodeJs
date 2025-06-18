import app from './app.js';
import { sequelize } from './models/index.js';

const conexion=async()=>{
    try {
        await sequelize.sync({force:false})
        app.listen(3000)
        console.log("el servicio esta corriendo en el puerto 3000");
    } catch (error) {
        console.log("No esta funcionando");
    }
}

conexion()

