import { sequelize } from "../db.js";
import {Rol} from '../models/Rol.js'

export const obtenerRoles=async(req,res)=>{
    try {
        const data=await Rol.findAll()
        if (data.length===0) {
            return res.status(404).json({error:"no hay roles"})
        }
        res.send(200).json({
            message:"Roles totales",
            data
        })
    } catch (error) {
        console.log("roles no disponibles");
        res.send(500).json({
            error:"no hay roles disponibles",
            error
        })
    }
}

export const crearRoles=async(req,res)=>{
    const {rol}=req.body
    try {

        const dataNew=await Rol.create({
            rol
        })
        if (dataNew.length===0) {
            return res.status(404).json({
                message:"no se pudo crear rol"
            })
        }
        res.status(200).json({
            message:"rol creado",
            dataNew
        })
        
    } catch (error) {
        console.log("No se pudo generar rol");
        res.status(500).json({
            error:"no se generar el rol"
        })
    }
}

export const actualizaRol=async(req,res)=>{
    const {rol}=req.body
    const {id}=req.params

    try {
        const data=await Rol.update({
            rol
        },{
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404).json({error:"no hay roles disponibles"})
        }
        res.status(200).json({message:"roles disponibles",data})
    } catch (error) {
        console.log("no se pudo actualizar el rol");
        res.status(500).json({
            error:"funcion en mantenimiento",
            error
        })
    }
}

export const eliminarRol=async(req,res)=>{
    const {id}=req.params

    try {
        const data=await Rol.destroy({
            where:{
                id
            }
        })
        if (data===0) {
            return res.status(404).json({
                error:"no se puede eliminar al usuario"
            })
        }
    } catch (error) {
        console.log("No se puede eliminar rol");
        res.status(500).json({
            error:"No se puede eliminar rol",
            error
        })
    }
}

export const rolXid=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Rol.findByPk(id)

        if (data.length===0) {
            return res.status(404).json({error:"no se encontro al usuuairo",data})
        }

        res.status(200).json({
            message:"se encontro al usuario",
            data:data
        })
    } catch (error) {
        console.log("no se encontro al usuario");
        res.status(500).json({
            error:"no se puede eliiminar",error
        })
    }

}