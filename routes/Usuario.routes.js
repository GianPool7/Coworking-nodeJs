import express from 'express'
import { obtenerUsuarios,crearUsuarios,actualizarUsuario,deleteUsuario,obtenerUsuarioXid } from '../controller/Usuario.controller.js'
import { validarUsuario } from '../middleware/middleware.js'

const router=express.Router()

router.get('/usuario',obtenerUsuarios)
router.post('/usuario',validarUsuario,crearUsuarios)
router.patch('/usuario/:id',validarUsuario,actualizarUsuario)
router.delete('/usuario/:id',deleteUsuario)
//
router.get('/usuario/:id',obtenerUsuarioXid)

export default router
