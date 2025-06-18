import { sequelize } from "../db.js";
import { Empleado } from "../models/Empleado.js";
import { validationResult } from "express-validator";

export const obtenerEmpleado=async(req,res)=>{
    try {
        const data= await Empleado.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:"Error al obtener a todos los empleados"})
    }
}

export const crearEmpleado=async(req,res)=>{
    const errores=validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores:errores.array()})
    }
    const { nombres, apellidos, tipo_Documento, numero_Documento, cargo } = req.body;
    try {
        const dataNew=await Empleado.create({
            nombres,
            apellidos,
            tipo_Documento,
            numero_Documento,
            cargo
        })
        res.status(201).json(dataNew)
    } catch (error) {
        res.status(500).json({error:"Error al crear empleados"})
    }
}

export const editarEmpleado=async(req,res)=>{

    const errores=validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({errores:errores.array()})
        }
    
    const { nombres, apellidos, tipo_Documento, numero_Documento, cargo } = req.body;
    const {id}=req.params

    try {
        const [dataUpdate]=await Empleado.update({
            nombres,
            apellidos,
            tipo_Documento,
            numero_Documento,
            cargo
        },{
            where:{
                id
            }
        })

        if (dataUpdate===0) {
            return res.status(404).json({error:"Empleado no econtrado o sin cambios"})
        }

        res.status(200).json(dataUpdate)
    } catch (error) {
        res.status(500).json({error:"Error al actualizar"})
    }
}

export const eliminarEmpleado=async(req,res)=>{
    
    try {
        const {id}=req.params
        const dataDelete=await Empleado.destroy({
            where:{
                id
            }
        })

        if (dataDelete===0) {
            return res.status(404).json({error:"Empleado no encontrado"})
        }

        res.status(200).json(dataDelete)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Error al eliminar"})
    }

}

export const obteniendoEmpleadoXid=async(req,res)=>{
    try {
        const {id}=req.params
        const dataXid=await Empleado.findOne({
            where:{
                id,
            }
        })

        if (!dataXid) {
            return res.status(404).json({error:"Empleado no encontrado",data:dataXid})
        }

        res.status(200).json(dataXid)
    } catch (error) {
        res.status(500).json({error:"Error al obtener empleado"})
    }
}