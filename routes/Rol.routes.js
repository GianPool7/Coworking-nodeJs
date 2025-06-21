import express from 'express'
import { obtenerRoles,crearRoles,actualizaRol,eliminarRol,rolXid } from '../controller/Rol.controller.js';
import {validarRol} from '../middleware/middleware.js'

const router=express.Router();

router.get('/roles',obtenerRoles)
router.post('/roles',validarRol,crearRoles)
router.patch('/roles/:id',validarRol,actualizaRol)
router.delete('/roles/:id',eliminarRol)
router.get('/roles/:id',rolXid)

export default router;