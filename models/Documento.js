import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Documento=sequelize.define("Documento",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    tipo:{
        type:DataTypes.STRING
    }
})