import { sequelize } from "../db.js";
import { validationResult } from "express-validator";
import { DatosPersonales } from "../models/DatosPersonales.js";

export const obtenerDatosPersonales=async(req,res)=>{
    // res.send("todo los datos personales")
    try {
        const data=await DatosPersonales.findAll()
        if (data.length===0) {
            return res.status(404).json({error:"no hay datos personales"})
        }
        res.status(200).json({
            message:"Datos Personales",
            data
        })
    } catch (error) {
        console.log("no hay datos personales",error);
        res.status(500).json({
            error:"no hay datos personales"
        })
    }
}

export const crearDatosPersonales=async(req,res)=>{
    const {id_usuario,nombres,apellidos,id_tipoDocumento,numeroDocumento}=req.body
    try {
        const data=await DatosPersonales.create({
            id_usuario,
            nombres,
            apellidos,
            id_tipoDocumento,
            numeroDocumento
        })

        if (data.length===0) {
            return res.status(404).json({
                error:"no se puede crear los datos personales"
            })
        }

        res.status(200).json({
            message:"la creacion salio exitosamente",
            data
        })

    } catch (error) {
        console.log("no se puede crear los datos personale",error);
        res.status(500).json({
            error:"No se puede crear los datos personales"
        })
    }
}

export const actualizarDatosPersonales=async(req,res)=>{
    const {id_usuario,nombres,apellidos,id_tipoDocumento,numeroDocumento}=req.body
    const {id}=req.params
    try {
        const [data]=await DatosPersonales.update({
            id_usuario,
            nombres,
            apellidos,
            id_tipoDocumento,
            numeroDocumento
        },{
            where:{
                id
            }
        })
        if ([data].length===0) {
            return res.status(404).json({
                error:"no se pudo actualizar los datos personales"
            })
        }
        res.status(200).json({
            message:"Datos personales actualizados",
            data
        })
    } catch (error) {
        console.log("Error al actualizar los datos personales",error);
        res.status(500).json({
            error:"No se pudo actualizar datos personales"
        })
    }
}

export const eliminandoDatosPersonales=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await DatosPersonales.destroy({
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404).json({error:"no se pudo eliminar sus datos personales"})   
        }
        res.status(200).json({
            message:"Se elimino correctamente"
        })
    } catch (error) {
        console.log("error al eliminar datos personales",error);
        res.status(500).json({
            error:"no se puede eliminar datos personales"
        })
    }
}
//
export const datosPersonalesXid=async(req,res)=>{
    //const {id}=req.params
    const {nombres}=req.params
    try {
        const data=await DatosPersonales.findOne({
            where:{
                nombres:nombres
            }
        })
        if (data.length===0) {
            return res.status(404).json({
                error:"No se encontro datos personales con ese nombre",nombres
            })
        }
        res.status(200).json({
            message:"Datos personales encontrado",
            data
        })
    } catch (error) {
        console.log('No se puede encontrar al personal',error);
        res.status(500).json({
            error:"no se pudo encontrar"
        })
    }
}