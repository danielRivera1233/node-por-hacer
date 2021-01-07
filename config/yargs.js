const completado = {
    default: true,
    alias: 'c',
    desc:  'Marca la tarea como completado'
};

const descripcion = {
    demand : true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elelemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elelemento por hacer', {
        descripcion
    })
    .help()
    .argv;   

module.exports = {
    argv
}