import { Usuarios } from './Usuarios.js';
import { DatosPersonales } from './DatosPersonales.js';
import { Rol } from './Rol.js';
import { Documento } from './Documento.js';
import { Oficina } from './Oficina.js';
import { Servicios } from './Servicio.js';
import { Oficina_Servicio } from './OficinaServicio.js';
import { Reserva } from './Reserva.js';
import { Pago } from './Pago.js';

// Usuario y DatosPersonales
Usuarios.hasOne(DatosPersonales, { foreignKey: 'id_usuario' });
DatosPersonales.belongsTo(Usuarios, { foreignKey: 'id_usuario' });

// Usuario y Rol
Usuarios.belongsTo(Rol, { foreignKey: 'idRol' });
Rol.hasMany(Usuarios, { foreignKey: 'idRol' });

// DatosPersonales y TipoDocumento
DatosPersonales.belongsTo(Documento, { foreignKey: 'id_tipoDocumento' });
Documento.hasMany(DatosPersonales, { foreignKey: 'id_tipoDocumento' });

// Oficina y Servicios - Relación N:M
Oficina.belongsToMany(Servicios, {
    through: Oficina_Servicio,
    foreignKey: 'id_oficina'
});
Servicios.belongsToMany(Oficina, {
    through: Oficina_Servicio,
    foreignKey: 'id_servicio'
});

// Oficina y Reserva
Oficina.hasMany(Reserva, { foreignKey: 'id_oficina' });
Reserva.belongsTo(Oficina, { foreignKey: 'id_oficina' });

// Usuario y Reserva
Usuarios.hasMany(Reserva, { foreignKey: 'id_usuario' });
Reserva.belongsTo(Usuarios, { foreignKey: 'id_usuario' });

// Pago y Reserva
Pago.hasOne(Reserva, { foreignKey: 'id_pago' });
Reserva.belongsTo(Pago, { foreignKey: 'id_pago' });
