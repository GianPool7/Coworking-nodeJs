import { sequelize } from "../db.js";
import { Oficina_Servicio } from "../models/OficinaServicio.js";
import { validationResult } from "express-validator";

export const obtenerOficinaServicio=async(req,res)=>{
    try {
        const data=await Oficina_Servicio.findAll()
        if (data.length===0) {
            return res.status(404).json({
                error:"no hay oficina con servicios disponibles"
            })
        }
        res.status(200).json({
            message:"todas la oficinas con sus servicios"
        })
    } catch (error) {
        console.log('no se pueden mosrar las oficinas con servicios',error);
        res.status(500).json({
            error:"no hay datos para mostrar"
        })
    }
}

export const crearOficinaServicio=async(req,res)=>{
    const errores=validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(404).json({
            errores:"todo los campos son obligatorios"
        })
    }
    const {id_oficina,id_servicio}=req.body
    try {
        const data=await Oficina_Servicio.create({
            id_oficina,
            id_servicio
        })
        if (!data) {
            return res.status(404).json({
                error:"no se pudo crear la oficina con servicio"
            })
        }
        res.status(200).json({
            message:"Se creo la oficina con su servicio",
            data
        })
    } catch (error) {
        console.log('no se puede crear la oficina con su servicio',error);
        res.status(500).json({
            error:"no se puede crear la oficina y su servicio"
        })
    }
}

export const actualizarOficinaServicio=async(req,res)=>{
    const errores=validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            errores:errores.array()
        })
    }
    const {id_Oficina,id_Servicio}=req.body
    const {id}=req.params
    try {
        const [data]=await Oficina_Servicio.update({
            id_Oficina, 
            id_Servicio
        })
        if ([data].length===0) {
            res.status(404).json({
                error:"no se actualizo correctamente"
            })
        }
        res.status(200).json({
            message:"se actualizo correctamente",
            data
        })
    } catch (error) {
        console.log("no se puede actualizar",error);
        res.status(500).json({
            error:"no hay actualizacion"
        })
    }
}

export const deleteOficinaServicio=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Oficina_Servicio.destroy({
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404).json({
                error:"no se puede eliminar"
            })
        }
        res.status(200).json({
            message:"se elimino correctamente"
        })
    } catch (error) {
        console.log("no se puede eliminar",error);
        res.status(500).json({
            error:"no se puede eliminar correctamente"
        })
    }
}

export const oficinaServicioXid=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Oficina_Servicio.findOne({
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404).json({error:'no se encontro la oficiina con su servicio'})
        }
        res.status(200).json({
            message:"dato encontrada",
            data
        })
    } catch (error) {
        console.log('no hay oficina con el serivicio',error);
        res.status(500).json({
            error:"no hay servicio"
        })
    }
}