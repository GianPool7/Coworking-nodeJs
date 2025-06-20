import express from 'express'
import { obtenerOficinas,crearOficinas,actualizarOficina,eliminarOficina,oficinaXid } from '../controller/Oficina.controller.js'

const router=express.Router()

router.get('/oficina',obtenerOficinas)
router.post('/oficina',crearOficinas)
router.patch('/oficina/:id',actualizarOficina)
router.delete('/oficina/:id',eliminarOficina)
//
router.get('/oficina/:id',oficinaXid)
//
export default router;