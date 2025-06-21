import express from 'express'
import {validarReserva} from '../middleware/middleware.js'

const router=express.Router()

router.get('/reserva')
router.post('/reserva',validarReserva)
router.patch('/reserva',validarReserva)
router.delete('/reserva')
//
router.get('/reserva')

export default router;