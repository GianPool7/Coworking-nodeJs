import express from 'express'
import { obtenerOficinaServicio,crearOficinaServicio,actualizarOficinaServicio,deleteOficinaServicio,oficinaServicioXid } from '../controller/OficinaServicio.controller.js';
import { oficinaServicio } from '../middleware/middleware.js';

const router=express.Router();

router.get('/oficinaServicio',obtenerOficinaServicio)
router.post('/oficinaServicio',oficinaServicio,crearOficinaServicio)
router.patch('/oficinaServicio/:id',oficinaServicio,actualizarOficinaServicio)
router.delete('/oficinaServicio/:id',deleteOficinaServicio)
//
router.get('/oficinaServicio/:id',oficinaServicioXid)

export default router;