import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Rol=sequelize.define("Rol",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true
    },
    rol:{
        type:DataTypes.STRING
    }
})