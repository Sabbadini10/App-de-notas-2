const fs = require('fs');
const { argv } = require('process');
const process = require('process')
let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

let funcionesDeTarea = {
  leerJSON : function () {
    tareas.forEach(tareas => {
    console.log(`-(${tareas.id}) == ${tareas.titulo} == ${tareas.estado}`)
    })
  },
  escribirJSON: function (escribirTarea) {
    escribirTarea = {
titulo: argv[3],
estado : argv[4]
}
escribirTarea  = JSON.stringify(escribirTarea);
fs.writeFileSync('./tareas.json', escribirTarea, null, 3);
tareas.push(escribirTarea)
    console.log(`
  =====================================
  = Su tarea se escribio correctamente  =
  =====================================
   `)
  },
  guardarTarea: function(){
    return this.escribirJSON();
    
  },
  leerPorEstado: function(estado) {
    
  },
  filtrarPorEstado: function () {
    const filtrarPorEstado2 = () => {
let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
  return console.log(filtrarPorEstado2)
}}
}



module.exports = funcionesDeTarea;
