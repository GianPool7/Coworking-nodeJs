import { sequelize } from "../db.js";
import { Empleado } from "../models/Empleado.js";

export const obtenerEmpleado=async(req,res)=>{
    try {
        const data= await Empleado.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500)
        res.json("Error al obtener a todos los empleados")
    }
}

export const crearEmpleado=async(req,res)=>{
    const {nombres,apellidos,tipo_Documento,numero_Documento,cargo}=req.body
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
        res.status(500)
        res.json("Error al crear empleados")
    }
}

export const editarEmpleado=async(req,res)=>{
    try {
        const {nombres,apellidos,tipo_Documento,numero_Documento,cargo}=req.body
        const {id}=req.params
        const dataUpdate=await Empleado.update({
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
        res.status(200).json(dataUpdate)
    } catch (error) {
        res.status(500)
        res.json("Error al actualizar")
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
        res.status(200).json(dataDelete)
    } catch (error) {
        res.status(500)
        res.json("Error al eliminar")
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
        res.status(200).json(dataXid)
    } catch (error) {
        res.status(500)
        res.json("Error al obtener empleado")
    }
}