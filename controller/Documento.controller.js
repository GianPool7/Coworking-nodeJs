import { sequelize } from "../db.js";
import { validationResult } from "express-validator";
import { Documento } from "../models/Documento.js";

export const obtenerDocumento=async(req,res)=>{
    try {
        const data=await Documento.findAll()
        if (data.length===0) {
            return res.status(404).json({error:"no hay documentos disponibles"})
        }
        res.status(200).json({message:"documento disponibles"})
    } catch (error) {
        console.log("error al obtener lo tipos de documento");
        res.status(500).json({
            error:"No se puede obtener los tipos de documentos",
            error
        })
        
    }
}

export const crearDocumento=async(req,res)=>{
    const errores=validationResult(req)
    if (!errores.isEmpty()) {
        res.status(404).json({error:"los campos son obligratorios",errores})
    }
    const {tipo}=req.body
    try {
        const data=await Documento.create({
            tipo
        })
        if (data===0) {
            return res.status(404).json({error:"no se creo el documento"})
        }
        res.status(200).json({
            message:"se creo exitosamente",
            data:data
        })
    } catch (error) {
        console.log("No se pudo crear el documento, Llamar TI",error);
        res.status(500).json({
            error:"no se pudo crear correctamente",
        })
    }
}

export const actualizarDocumento=async(req,res)=>{
    const errores=validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(404).json({error:"faltan datos",errores})
    }
    const {tipo}=req.body
    const {id}=req.params
    try {
        const [data]=await Documento.update({
            tipo
        },{
            where:{
                id
            }
        })
        if ([data].length===0) {
            return res.status(404).json({error:"No se actualizo el documento"})
        }
        res.status(200).json({
            message:"se actualizo correctamente",
            data:data
        })
    } catch (error) {
        console.log('No se puede actualizar correctamente',error);
        res.status(500).json({
            error:"no se pudo actualizar correctamente"
        })
    }
}

export const eliminarDocumento=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Documento.destroy({
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404).json({error:"No se pudo eliminar el documento"})
        }
        res.status(200).json({
            message:"Se elimino correctamente",
            data:data
        })
    } catch (error) {
        console.log("Erro al eliminar el docmento",error);
        res.status(500).json({
            error:"No se pudo eliminar",
        })
    }
}

export const documentoXid=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Documento.findByPk(id)
        if (data===0) {
            return res.status(404).json({error:"no se encontro al documento"})
        }
        res.status(200).json({
            message:"Se encontro al documento",
            data:data
        })
    } catch (error) {
        console.log("No hay documento",error);
        res.status(500).json({
            error:"no se encuentra el documento"
        })
    }
}