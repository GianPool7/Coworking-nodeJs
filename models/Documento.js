import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Documento=sequelize.define("Documento",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true
    },
    tipo:{
        type:DataTypes.STRING
    }
})