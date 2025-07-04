import { sequelize } from "../db.js"
import { Usuarios } from "../models/Usuarios.js"
import { DatosPersonales } from '../models/DatosPersonales.js'
import { validationResult } from "express-validator"

export const obtenerUsuarios=async(req,res)=>{
    try {
        const data=await Usuarios.findAll()
        if (data.length===0) {
            return res.status(404).json({ error: "No hay usuarios registrados", data: [] })
        }
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Error al mostrar todos los usuarios"})
    }
}

export const crearUsuarios=async(req,res)=>{

    const error=validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({error:error.array()})
    }

    const {email,password,idRol}=req.body

    try {
        const dataNew=await Usuarios.create({
            email,
            password,
            idRol
        })
        res.status(200).json(
            {
                message:"Nuevo usuario existosamente",
                data:dataNew
            },
        )
    } catch (error) {
        console.log("Error al crear usuario",error);
        res.status(500).json({error:"Error al crear empleados"})
    }
}

export const actualizarUsuario=async(req,res)=>{

    const errores=validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({errores:errores.array()})
    }
    
    const{email,password,idRol}=req.body
    const{id}=req.params

    try {
        const [dataUpdate]=await Usuarios.update({
            email,
            password,
            idRol
        },{
            where:{
                id
            }
        })
        if (dataUpdate===0) {
            return res.status(404).json({error:"no se puedo realizar la actualizacion",data:id})
        }
        res.status(200).json("El dato se actualizo exitosamente")
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"no actualizo el usuario"})
    }

}

export const deleteUsuario=async(req,res)=>{
    const {id}=req.params
    try {
        const dataDelete=await Usuarios.destroy({
            where:{
                id
            }
        })
        if (dataDelete===0) {
            return res.status(404).json({error:"Error al eliminar usuario",data:id})
        }
        return res.status(200).json({message:"Se elimino correctamente"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"error al eliminar"})
    }
}

export const obtenerUsuarioXid=async(req,res)=>{
    const {id}=req.params
    try {
        const dataXid=await Usuarios.findOne({
            where:{
                id
            }
        })

        if (!dataXid) {
            return res.status(404).json({error:"error al obtener usuario",id})
        }

        return res.status(200).json(dataXid);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"error al obtener usuario"})
    }

}

//  a esperar un poco mas que estoy buscando
export const datosXusuario=async(req,res)=>{
    const {id}=req.params

    try {
        const data=await DatosPersonales.findOne(id)
    } catch (error) {
        
    }
}