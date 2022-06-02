const fs = require('fs');
const { argv } = require('process');
const process = require('process')
let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

let funcionesDeTarea = {
  leerJSON: function () {
    tareas.forEach(tareas => {
      console.log(`-(${tareas.id}) == ${tareas.titulo} == ${tareas.estado}`)
    })
  },
  escribirJSON: function (tareaNueva) {
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
  },
  guardarTarea: function (escribirJSON) {
    tareas.push(this.escribirJSON(tareaNueva));

  },
  leerPorEstado: function (estado) {
    tareas.forEach(tareas => {
      if (tareas.estado === estado) {
        console.log(`-(${tareas.id}) == ${tareas.titulo} == ${tareas.estado}`)
      }
    })
  },
  filtrarPorEstado: function (estado) {
    let tareasFiltradas =  this.leerPorEstado(estado);
    return tareasFiltradas.filter(tareas => tareas.estado === estado);
  },

  crearTarea: function (titulo) {
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
  }

}



module.exports = funcionesDeTarea;
