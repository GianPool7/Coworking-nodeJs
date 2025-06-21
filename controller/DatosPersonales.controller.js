import { sequelize } from "../db.js";
import { validationResult } from "express-validator";

export const obtenerDatosPersonales=(req,res)=>{
    res.send("todo los datos personales")
}

export const crearDatosPersonales=(req,res)=>{
    res.send("creando los datos personales")
}

export const actualizarDatosPersonales=(req,res)=>{
    res.send("actualizando los datos personales")
}

export const eliminandoDatosPersonales=(req,res)=>{
    res.send("Eliminando datos personales")
}
//
export const datosPersonalesXid=(req,res)=>{
    res.send("obteniendo datos personales")
}