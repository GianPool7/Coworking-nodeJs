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