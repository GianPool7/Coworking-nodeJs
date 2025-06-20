import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const DatosPersonales=sequelize.define("DatosPersonales",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true
    },
    id_usuario:{
        type:DataTypes.INTEGER
    },
    nombres:{
        type:DataTypes.STRING
    },
    apellidos:{
        type:DataTypes.STRING
    },
    id_tipoDocumento:{
        type:DataTypes.INTEGER
    },
    numeroDocumento:{
        type:DataTypes.INTEGER
    }
})