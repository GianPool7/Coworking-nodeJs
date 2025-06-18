import { sequelize } from "../db.js";
import { Usuarios } from "./Usuarios.js";
import { Servicios } from "./Servicio.js";
import { Rol } from "./Rol.js";
import { Reserva } from "./Reserva.js";
import { Pago } from "./Pago.js";
import { Oficina_Servicio } from "./OficinaServicio.js";
import { Oficina } from "./Oficina.js";
import { Documento } from "./Documento.js";
import { DatosPersonales } from "./DatosPersonales.js";

import './Relaciones.js'

export{
    sequelize,
    Usuarios,
    Servicios,
    Rol,
    Reserva,
    Pago,
    Oficina_Servicio,
    Oficina,
    Documento,
    DatosPersonales
}