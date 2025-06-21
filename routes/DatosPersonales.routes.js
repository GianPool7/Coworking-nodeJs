import express from 'express'
import { obtenerDatosPersonales,crearDatosPersonales,actualizarDatosPersonales,eliminandoDatosPersonales,datosPersonalesXid } from '../controller/DatosPersonales.controller.js'
import { validarDatosPersonales } from '../middleware/middleware.js'

const router=express.Router()

router.get('/datosPersonales',obtenerDatosPersonales)
router.post('/datosPersonales',validarDatosPersonales,crearDatosPersonales)
router.patch('/datosPersonales',validarDatosPersonales,actualizarDatosPersonales)
router.delete('/datosPersonales',eliminandoDatosPersonales)
//
router.get('/datosPersonales')
//
export default router;