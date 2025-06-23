import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Oficina_Servicio=sequelize.define("Oficina_Servicio",{
    id_oficina:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_servicio:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})