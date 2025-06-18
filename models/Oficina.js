import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Oficina=sequelize.define("Oficina",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    nombre:{
        type:DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    },
    capacidad:{
        type:DataTypes.INTEGER
    }
})