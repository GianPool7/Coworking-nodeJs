import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Usuarios=sequelize.define("Usuarios",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING
    },
    rol:{
        type:DataTypes.STRING
    },
    empleadoId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})