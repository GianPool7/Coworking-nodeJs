import express from 'express'
import { crearEmpleado, editarEmpleado, eliminarEmpleado, obtenerEmpleado, obteniendoEmpleadoXid } from '../controller/Empleado.controller.js';

const router=express.Router();

router.get('/Empleado',obtenerEmpleado);
router.post('/Empleado',crearEmpleado);
router.patch('/Empleado/:id',editarEmpleado);
router.delete('/Empleado/:id',eliminarEmpleado);
router.get('/Empleado/:id',obteniendoEmpleadoXid);

export default router;