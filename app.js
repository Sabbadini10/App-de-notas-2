const fs = require('fs');

const process = require('process');
const { leerJSON, escribirJSON, filtrarPorEstado, crearTarea, guardarTarea, leerPorEstado} = require('./tareas');

let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

const accion = process.argv[2];

const titulo = process.argv[3];

const estado = process.argv[4]


switch (accion) {
    case 'listar':
    leerJSON()
    break;
    case 'escribir json':
          escribirJSON(titulo, estado)
        break;
    case 'guardar el archivo actualizado':
        guardarTarea()
    console.log(tareas)
        console.log(`
                     ===================================
                       El Archivo se guardado con exito   
                     ===================================`); 
        break;
    case 'eliminar':
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
            console.log(`
            =====================================
            = Su estado se filtro correctamente =
            =====================================
            `)
            filtrarPorEstado(estado);
            break;
            case 'crear':
                crearTarea(titulo)
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

console.log(hola);
console.log("console log dentro de la rama secundaria.");