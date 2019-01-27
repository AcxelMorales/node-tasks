const FS = require('fs');

let listadoTask = [];

const saveDB = () => {
  let data = JSON.stringify(listadoTask);

  FS.writeFile('database/data.json', data, err => {
    if (err) throw new Error('No se pudo grabar'.red);
  });
}

const loadDB = () => {
  try {
    listadoTask = require('../database/data.json');
  } catch (error) {
    listadoTask = [];
  }
  return listadoTask;
}

const create = desc => {
  loadDB();

  let task = {
    desc,
    completado: false
  };

  listadoTask.push(task);
  saveDB();
  return task;
}

const list = () => loadDB();

const update = (desc, completado = true) => {
  loadDB();
  let index = listadoTask.findIndex(task => task.desc === desc);

  if (index >= 0) {
    listadoTask[index].completado = completado;
    saveDB();
    return true;
  } else {
    return false
  }
}

const deletee = desc => {
  loadDB();
  let nuevoListado = listadoTask.filter(task => task.desc !== desc);

  if (listadoTask.length === nuevoListado.length) {
    return true;
  } else {
    listadoTask = nuevoListado;
    saveDB();
    return true;
  }
}

module.exports = {
  create,
  list,
  update,
  deletee
};