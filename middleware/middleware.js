import { body } from "express-validator";

export const validarMiddlewareEmpleado=[
    body('nombres').notEmpty().escape().withMessage('El nombre es obligatorio').isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('apellidos').notEmpty().escape().withMessage('El apellido es obligatirio'),
    body('tipo_Documento').notEmpty().escape().withMessage('Escoja un tipo de documento valido'),
    body('numero_Documento')
        .notEmpty().escape().withMessage("El numero de documento es obligatorio")
        .isNumeric().withMessage('Ingrese un numero valido'),
    body('cargo').notEmpty().escape().withMessage('Ingrese un cargo valido')
]
// usuario
export const validarUsuario=[
    body('email').notEmpty().escape().withMessage('El correo es obligatorio'),
    body('password')
        .notEmpty().escape().withMessage('La contraseña es obligatori')
        .isLength({min:8}).withMessage('Los caracteres deben ser minimo 8'),
    body('idRol')
        .notEmpty().escape().withMessage("El rol es necesario")
        .isNumeric().withMessage("El id del rol debe ser numero")
]
// servicio
export const validarServicio=[
    body('nombre')
        .notEmpty().escape().withMessage("El nombre del servicio es obligatorio")
]
// Rol
export const validarRol=[
    body('rol')
        .notEmpty().escape().withMessage('El nombre del rol es obligatorio')
]
//Reserva
export const validarReserva=[
    body('hora_inicio')
        .notEmpty().escape().withMessage('La hora de inicio es obligatorio'),
    body('hora_fin')
        .notEmpty().escape().withMessage('La hora de fin es obligatorio'),
    body('id_oficina')
        .notEmpty().escape().withMessage('Ingresar la oficina es obligario'),
    body('id_pago')
        .notEmpty().escape().withMessage('Ingresar la transacion es obligatorio'),
    body('id_usuario')
        .notEmpty().escape().withMessage('Ingresar el cliente que solicito la reserva')
]
//Pago
export const validarPago=[
    body('metodo_pago')
        .notEmpty().escape().withMessage('Ingresar el metodo de pago'),
    body('estado_pago')
        .notEmpty().escape().withMessage('Ingresar el estado del pago'),
    body('monto')
        .notEmpty().escape().withMessage('Ingresar el monto')
]
//oficina
export const validarOficina=[
    body('nombre')
        .notEmpty().escape().withMessage('Ingresar el nombre de la oficina'),
    body('direccion')
        .notEmpty().escape().withMessage('Ingresar la direccion de la oficina'),
    body('capacidad')
        .notEmpty().escape().withMessage('Ingresar el aforo necesario por favor')
]
//oficina y servicio
export const oficinaServicio=[
    body('id_oficina')
        .notEmpty().escape().withMessage('Ingresar la oficina'),
    body('id_servicio')
        .notEmpty().escape().withMessage('Ingresar el servicio de la oficina')
]
//Documento
export const validarDocumento=[
    body('tipo')
        .notEmpty().escape().withMessage('Ingresar el tipo de documento')
]
//Datos Personales
export const validarDatosPersonales=[
    body('id_usuario')
        .notEmpty().escape().withMessage('Ingresar el usuario correspondiente'),
    body('nombres')
        .notEmpty().escape().withMessage('Ingresar el nombre es obligatorio'),
    body('apellidos')
        .notEmpty().escape().withMessage('Ingresar el apellido es obligatorio'),
    body('id_tipoDocumento')
        .notEmpty().escape().withMessage('Ingresar el tipo de identificacion'),
    body('numeroDocumento')
        .notEmpty().escape().withMessage('Ingresar el numero del documento')
]
