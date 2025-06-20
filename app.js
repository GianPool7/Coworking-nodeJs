import express from 'express'
import usuarioRouter from './routes/Usuario.routes.js'
import oficinaRouer from './routes/Oficina.routes.js'

const app=express()
app.use(express.json());

// rutas
app.use('/api/',usuarioRouter)
app.use('/api/',oficinaRouer)

export default app;