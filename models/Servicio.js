import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Servicios=sequelize.define("Servicios",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING,
    }
})