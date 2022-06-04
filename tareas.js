const fs = require('fs');
let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

  const leerJSON = function () {
    let tareas = fs.readFileSync('tareas.json', 'utf-8');
    return console.log(tareas);
  }
  const crearTarea = function (titulo) {
    tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
    let crearTareas = {
      id: tareas.length + 1,
      titulo: titulo,
      estado: 'pendiente'
    }
    tareas.push(crearTareas);
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3));
    console.log(`
  =====================================
  = Su tarea se creo correctamente  =
  =====================================
   `)
  }
  const escribirJSON = function (titulo, estado) {
    tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
    tareas.push({
      id: tareas.length + 1,
      titulo: titulo,
      estado: estado
      });
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3));
    console.log(`
  =====================================
  = Su tarea se escribio correctamente  =
  =====================================
    `)
  }
  const guardarTarea = function (escribirJSON) {
    tareas.push(escribirJSON);

  }
    const leerPorEstado = function (estado) {
      let tareas = leerJSON();
      return tareas.filter(e => e.estado === estado);
    }

  const filtrarPorEstado = function (estado) {
    let tareas = leerPorEstado(estado);
    tareas.forEach((element) => console.log(` (${element.id})-${element.titulo} -  estado : ${element.estado}`));
  }

  const eliminarTarea = function (titulo, estado, id) {
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
  }
  /* const accion = process.argv[2];
  const acciones = {
    crear: crearTarea,
    eliminar: eliminarTarea,
    leer: leerJSON,
    leerPorEstado: leerPorEstado,
    filtrarPorEstado: filtrarPorEstado,
    guardarTarea: guardarTarea
  } */
module.exports = {
  leerJSON,
  escribirJSON,
  guardarTarea,
  leerPorEstado,
  filtrarPorEstado,
  crearTarea,
  eliminarTarea
}
