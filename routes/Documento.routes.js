import express from 'express'
import { obtenerDocumento,crearDocumento,actualizarDocumento,eliminarDocumento,documentoXid } from '../controller/Documento.controller.js'
import { validarDocumento } from '../middleware/middleware.js'

const router=express.Router()

router.get('/Documento',obtenerDocumento);
router.post('/Documento',validarDocumento,crearDocumento);
router.patch('/Documento/:id',validarDocumento,actualizarDocumento);
router.delete('/Documento/:id',eliminarDocumento);
//
router.get('/Documento/:id',documentoXid);
//
export default router;