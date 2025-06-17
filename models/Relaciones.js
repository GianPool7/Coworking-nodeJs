import { Empleado } from './Empleado.js';
import { Usuarios } from './Usuarios.js'; // si tienes un modelo Usuario

// Ejemplo: Un empleado tiene un usuario
Empleado.hasOne(Usuarios, { foreignKey: 'empleadoId' });
Usuarios.belongsTo(Empleado, { foreignKey: 'empleadoId' });

export { Empleado, Usuarios };