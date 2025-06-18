import express from 'express'
import { crearEmpleado, editarEmpleado, eliminarEmpleado, obtenerEmpleado, obteniendoEmpleadoXid } from '../controller/Empleado.controller.js';
import { validarMiddlewareEmpleado } from '../middleware/middleware.js';

const router=express.Router();

router.get('/Empleado',obtenerEmpleado);
router.post('/Empleado',validarMiddlewareEmpleado,crearEmpleado);
router.patch('/Empleado/:id',validarMiddlewareEmpleado,editarEmpleado);
router.delete('/Empleado/:id',eliminarEmpleado);
router.get('/Empleado/:id',obteniendoEmpleadoXid);

export default router;