import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Reserva=sequelize.define("Reserva",{
    id:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
    hora_inicio:{
        type:DataTypes.TIME,
    },
    hora_fin:{
        type:DataTypes.TIME
    },
    id_oficina:{
        type:DataTypes.INTEGER
    },
    id_pago:{
        type:DataTypes.INTEGER
    },
    id_usuario:{
        type:DataTypes.INTEGER
    }
})