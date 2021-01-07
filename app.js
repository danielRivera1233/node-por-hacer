// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getlistado();

        for (let tarea of listado){
            console.log('====== POR HACER ======'.green);
            console.log(colors.red(tarea.descripcion));
            console.log(colors.red('Estado: ', tarea.completado));
            console.log('======================='.green);
        }

        console.log('Listar las tareas por hacer.');
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);    
        break;
        
    default:
        console.log('Comando no reconocido.'); 
        break;
}

console.log(comando);