import express from 'express'
import { obtenerServicio,createServicio,actualizarServicio,eliminarServicio,servicioXid } from '../controller/Servicio.controller.js'
import { validarServicio } from '../middleware/middleware.js'

const router=express.Router()

router.get('/servicio',obtenerServicio)
router.post('/servicio',validarServicio,createServicio)
router.patch('/servicio/:id',validarServicio,actualizarServicio)
router.delete('/servicio/:id',eliminarServicio)
//
router.get('/servicio/:id',servicioXid)

export default router;