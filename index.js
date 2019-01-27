const {
    ARGV
} = require('./config/yargs');
const TASK = require('./todoos/task');
const COLORES = require('colors');

let comando = ARGV._[0];

switch (comando) {
    case 'crear':
        TASK.create(ARGV.descripcion);
        break;
    case 'listar':
        let listado = TASK.list();

        for (let i of listado) {
            console.log('============TASK============'.green);
            console.log(`Task: ${i.desc}`);
            console.log(`Estado: ${i.completado}`);
            console.log('============================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = TASK.update(ARGV.descripcion, ARGV.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = TASK.deletee(ARGV.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Error en el comando');
        break;
}