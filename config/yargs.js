const ARGV = require('yargs')
  .command('crear', 'Crea una nueva tarea', {
    descripcion: {
      alias: 'd',
      demand: true,
      desc: 'Descripcion de la tarea por hacer'
    }
  })
  .command('actualizar', 'actualiza el estado de una tarea', {
    descripcion: {
      alias: 'd',
      demand: true
    },
    completado: {
      alias: 'c',
      default: true
    }
  })
  .command('borrar', 'borra un elemento de la lista de tareas', {
    descripcion: {
      alias: 'd',
      demand: true
    }
  })
  .help()
  .argv;

module.exports = {
  ARGV
};