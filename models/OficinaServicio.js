import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Oficina_Servicio=sequelize.define("Oficina_Servicio",{
    id_Oficina:{
        type:DataTypes.INTEGER
    },
    id_Servicio:{
        type:DataTypes.INTEGER
    }
})