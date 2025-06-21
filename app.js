import express from 'express'
import usuarioRouter from './routes/Usuario.routes.js'
import oficinaRouter from './routes/Oficina.routes.js'
import servicioRouter from './routes/Servicio.routes.js'
import rolRouter from './routes/Rol.routes.js'
import pagoRouter from './routes/Pago.routes.js'

const app=express()
app.use(express.json());

// rutas
app.use('/api/',usuarioRouter)
app.use('/api/',oficinaRouter)
app.use('/api/',servicioRouter)
app.use('/api/',rolRouter)
app.use('/api/',pagoRouter)

export default app;