import { sequelize } from '../db.js';
import {Servicios} from '../models/Servicio.js';
import { validationResult } from 'express-validator';

export const obtenerServicio=async(req,res)=>{
    try {
        const data=await Servicios.findAll()

        if (data.length===0) {
            return res.status(404).json({
                error:"No hay servicios disponibles"
            })
        }

        res.status(200).json({
            message:"Listado de servicio",
            data
        })

    } catch (error) {
        console.log("No se puede obtener los servicios");
        res.status(500).json({
            error:"no se puede mostrar los servicios"
        })
    }
}

export const createServicio=async(req,res)=>{

    const error=validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({error:error.array()})
    }

    const {nombre}=req.body

    try {
        const data=await Servicios.create({
            nombre
        })
        res.status(200).json({
            message:"el servicio se creo de manera correcta",
            data
        })
        
    } catch (error) {
        console.log("No se puede crear servicio");
        res.send(500).json({
            error:"no se pudo crear el servicio",error
        })
    }
}

export const actualizarServicio=async(req,res)=>{

    const errores=validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({errores:errores.array()})
    }

    const {nombre}=req.body
    const {id}=req.params

    try {
        const data=await Servicios.update({
            nombre,
        },
        {
            where:{
                id
            }
        }
    )
    res.status(200).json({message:"Se actualizo correctamente",data})

    } catch (error) {
        console.log("error al actualizar");
        res.status(500).json({
            error:"no se puede actualizar",error
        })
    }
}

export const eliminarServicio=async(req,res)=>{
    const {id}=req.params

    try {
        const data=await Servicios.destroy({
            where:{
                id
            }
        })
        res.status(200).json({message:"Se elimino correctamente",data})
    } catch (error) {
        console.log("Error al eliminar");
        res.status(500).json({
            error:"no se puede eliminar",error
        })
    }
}

export const servicioXid=async(req,res)=>{
    const {id}=req.params

    try {
        const data=await Servicios.findOne({
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404),json({
                error:"No se encontro el servicio"
            })
        }
        res.status(200).json({
            message:"se encontro el servicio",
            data
        })
    } catch (error) {
        console.log("No se puede encontrar el usuario");
        res.status(500).json({
            error:"No se pudo :(",
            data
        })
    }

}