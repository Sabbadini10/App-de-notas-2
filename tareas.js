const fs = require('fs');
let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

const leerJSON= function () {
  tareas.forEach(tareas => {
    console.log(`-(${tareas.id}) == ${tareas.titulo} == ${tareas.estado}`)
  })
};

const escribirJSON= function (tareaNueva) {
  let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
  tareaNueva = {
    id: tareas.length + 1,
    titulo: argv[3],
    estado: argv[4]
  }
  tareas.push(tareaNueva);
  fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3));
  (`
  =====================================
  = Su tarea se escribio correctamente  =
  =====================================
  `)
};

const guardarTarea= function (escribirJSON) {
    tareas.push(escribirJSON(tareaNueva));

  };

const leerPorEstado= function (estado) {
  tareas.forEach(tareas => {
    if (tareas.estado === estado) {
      console.log(`-(${tareas.id}) == ${tareas.titulo} == ${tareas.estado}`)
    }
  })
};

const filtrarPorEstado= function (estado) {
  let filtrados= tareas.filter(tareas => tareas.estado === estado);
  filtrados.forEach(tareas => {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`(${tareas.id})Titulo: ${tareas.titulo} ---- Estado: ${tareas.estado}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
})
};

const crearTarea= function (titulo) {
  let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
  let crearTarea = {
    id: tareas.length + 1,
    titulo: titulo,
    estado: 'pendiente'
  }
  tareas.push(crearTarea);
  fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3));
  console.log(`
  =====================================
  = Su tarea se creo correctamente  =
  =====================================
  `)
};

module.exports = {
  leerJSON,
  escribirJSON,
  guardarTarea,
  leerPorEstado,
  filtrarPorEstado,
  crearTarea,
};
