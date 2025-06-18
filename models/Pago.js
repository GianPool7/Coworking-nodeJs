import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Pago=sequelize.define("Pago",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    metodo_pago:{
        type:DataTypes.STRING
    },
    estado_pago:{
        type:DataTypes.STRING
    },
    monto:{
        type:DataTypes.DECIMAL
    }
})