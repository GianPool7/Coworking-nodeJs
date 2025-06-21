import express from 'express'
import { obtenerPagos,crearPago,actualizarPago,eliminarPago,pagoXid } from '../controller/Pago.controller.js';
import { validarPago } from '../middleware/middleware.js';
const router=express.Router();

router.get('/pago',obtenerPagos)
router.post('/pago',validarPago,crearPago)
router.patch('/pago/:id',validarPago,actualizarPago)
router.delete('/pago/:id',eliminarPago)
//
router.get('/pago/:id',pagoXid)

export default router;