import express from 'express'
import { obtenerServicio,createServicio,actualizarServicio,eliminarServicio,servicioXid } from '../controller/Servicio.controller.js'

const router=express.Router()

router.get('/servicio',obtenerServicio)
router.post('/servicio',createServicio)
router.patch('/servicio/:id',actualizarServicio)
router.delete('/servicio/:id',eliminarServicio)
//
router.get('/servicio/:id',servicioXid)

export default router;