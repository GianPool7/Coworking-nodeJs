import { sequelize } from "../db.js";
import { validationResult } from "express-validator";
import {Pago} from '../models/Pago.js'

export const obtenerPagos=async(req,res)=>{
    try {
        const data=await Pago.findAll()
        if (data.length===0) {
            return res.status(404).json({error:"No hay datos de pago"})
        }
        res.status(200).json({
            message:"Todas las formas de pagos",
            data:data
        })
    } catch (error) {
        console.log("no se puede mostrar todos los datos",error);
        res.status(500).json({
            error:"No se puede obtener los datos",
            error
        })
    }
}

export const crearPago=async(req,res)=>{
    const error=validationResult(req)
    if (!error.isEmpty()) {
        return res.status(404).json({
            error:"Complete todos los datos"
        })
    }
    
    const {metodo_pago,estado_pago,monto}=req.body

    try {
        const data=await Pago.create({
            metodo_pago,
            estado_pago,
            monto
        })
        if (data.length===0) {
            return res.status(404).json({
                error:"no se creo el pago"
            })
        }
        res.status(200).json({
            message:"se creo exitosamente",
            data:data
        })
    } catch (error) {
        console.log("no se pudo crear el pago",error);
        res.status(500).json({
            error:"no se pudo completar la creacion",
            error
        })
    }
}

export const actualizarPago=async(req,res)=>{
    const {metodo_pago,estado_pago,monto}=req.body
    const {id}=req.params

    try {
        const [data]=await Pago.update({
            metodo_pago,
            estado_pago,
            monto
        },{
            where:{
                id
            }
        })
        if ([data].length===0) {
            return res.status(404).json({
                error:"No se pudo actualizar correctamente",
                error
            })
        }
        res.status(200).json({message:"se actualizo correctamente"})
    } catch (error) {
        console.log('no se pueden realizar',error);
        res.status(500).json({
            error:"no se actualizo correctamente",error
        })
    }
}

export const eliminarPago=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Pago.destroy({
            where:{
                id
            }
        })
        if (data.length===0) {
            return res.status(404).json({
                error:"no se actualizaron corectamente"
            })
        }
        res.status(200).json({
            message:"se actualizo correctamente",
            data:data
        })
    } catch (error) {
        
    }
}

export const pagoXid=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Pago.findByPk(id)
        if (data.length===0) {
            return res.status(404).json({error:"dato no encontrada"})
        }
        res.status(200).json({
            message:"se actualizo correctamente",
            data:data
        })
    } catch (error) {
        console.log("Pago no encontrado");
        res.status(500).json({
            error:"Pago no encontrado"
        })
    }
}