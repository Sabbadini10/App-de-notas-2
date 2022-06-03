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
    if(tareas.estado !== estado){
      console.log(`
      ============================================
      No se encontro ninguna tarea con ese estado
      ============================================
      `)
     }
    tareas.forEach(tareas => {
      if (tareas.estado === estado) {
        console.log(`-(${tareas.id}) == ${tareas.titulo} == ${tareas.estado}`)
      }
      
    })
  },
  filtrarPorEstado: function (estado) {
    let filtrados= tareas.filter(tareas => tareas.estado === estado);
    filtrados.forEach(tareas => {
      console.log(`
      ===================================================
         (${tareas.id})_ Titulo: ${tareas.titulo} ---- Estado: ${tareas.estado}
      ===================================================
      `);
  })
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
  },
  eliminarTarea: function (titulo, estado, id) {
    tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
        let eliminado = tareas.pop({
            id: id,
            titulo: titulo,
            estado: estado,
        })
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3))
        console.log(`
        =====================================
        = Su tarea se elimino correctamente =
        =====================================
      `)
        console.log(`La tareas eliminada es : ${eliminado.id}, ${eliminado.titulo}, ${eliminado.estado}`)
  },
  comandos: setTimeout(function () {
    console.log(`
    =====================================
    ========== COMANDOS ===============
    =====================================
    = 1. listar ===============
    = 2. escribir ===============
    = 3. guardar ===============
    = 4. leer ===============
    = 5. filtrar ===============
    = 6. crear ===============
    = 7. eliminar ===============
    =====================================
    `)}, 1000)

  }






module.exports = funcionesDeTarea;
