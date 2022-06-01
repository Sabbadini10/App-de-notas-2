const fs = require('fs');

const process = require('process');
const { leerJSON, escribirJSON} = require('./tareas');

let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

const accion = process.argv[2];

const titulo = process.argv[3];

const estado = process.argv[4];


switch (accion) {
    case 'leer JSON':
    leerJSON()
    break;
    case 'escribir json':
          escribirJSON()
        break;
    case 'guardar el archivo actualizado':
        console.log(tareas)
        console.log(`
                     ===================================
                     El Archivo se actualizado con exito   
                     ===================================`); 
        break;
    case 'eliminar':
        eliminarTareas
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
        break;
        case 'filtrar':
            filtrarPorEstado();
            console.log(`
            =====================================
            = Su tarea se filtro correctamente =
            =====================================
            `)
            break;
    case "undefined": console.log(`
       ==============================================================
       =  Atencion - Tienes que pasar una accion.                   =
       =  Las acciones disponibles son : listar, agregar, eliminar. =
       ==============================================================
        `)
        break;
    default: console.log(`
   ==============================================================
   =  No entiendo que quieres hacer                             =
   =  Las acciones disponibles son : listar, agregar, eliminar. =
   ==============================================================
    `)
        break;
}


/* let escribirTarea = {
    id: tareas[tareas.length - 1].id +1,
    titulo,
    estado,
  } tareas.push(escribirTarea);*/