import { sequelize } from "../db.js";
import {Oficina} from '../models/Oficina.js'

export const obtenerOficinas=async(req,res)=>{
    try {
        const data=await Oficina.findAll()
        if (data.length===0) {
            return res.status(404).json({error:"No hay datos"})
        }
        res.json(data)
    } catch (error) {
        console.log("Error al obtener las oficinas");
        res.status(500).json({error:"No hay dato"})
    }
}

export const crearOficinas=async(req,res)=>{
    const {nombre,direccion,capacidad}=req.body
    try {
        const data= await Oficina.create({
            nombre,
            direccion,
            capacidad
        })
        res.status(200).json(
            {
                message:"oficina creada correctamente",
                data
            }
        )
    } catch (error) {
        console.log("Error al crear oficina");
        res.status(500).json(
            {error:"no se puede crear"}
        )
    }
}

export const actualizarOficina=async(req,res)=>{
    const {nombre,direccion,capacidad}=req.body
    const {id}=req.params

    try {
        const data=await Oficina.update({
            nombre,
            direccion,
            capacidad
        },{
            where:{
                id
            }
        }
    )
    res.status(200).json(
        {
            message:"Oficina actualizada",
            data
        }
    )
    } catch (error) {
        console.log("Error actualizar oficina");
        res.status(500).json(
            {
                error:"No se puede actualizar la oficina"
            }
        )
    }
}

export const eliminarOficina=async(req,res)=>{
    const {id}=req.params

    try {
        const dataDelete=await Oficina.destroy({
            where:{
                id
            }
        })

        if (dataDelete === 0) {
            return res.status(404).json({ error: "Oficina no encontrada" })
        }

        res.status(200).json(
            {
                message:"Se elimino correctamente la oficina",
                data:dataDelete
            }
        )

    } catch (error) {
        console.log("Erro al eliminar oficina");
        res.status(500).json(
            {
                error:"ELiminar oficina",error
            }
        )
    }

}

export const oficinaXid=async(req,res)=>{
    const {id}=req.params

    try {
        const data= await Oficina.findByPk(id)
        res.status(200).json(
            {
                message:"Oficina encontrado",
                data:data
            }
        )
    } catch (error) {
        console.log("No se pudo obtener");
        res.status(500).json(
            {
                error:"no se pudo obtener dato correctamente",error
            }
        )
    }

}