import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Empleado=sequelize.define('Empleado',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false,
    },
    nombres:{
        type:DataTypes.STRING
    },
    apellidos:{
        type:DataTypes.STRING
    },
    tipo_Documento:{
        type:DataTypes.INTEGER
    },
    numero_Documento:{
        type:DataTypes.STRING
    },
    cargo:{
        type:DataTypes.STRING
    }

})