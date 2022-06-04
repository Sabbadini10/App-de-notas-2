const fs = require('fs');
const process = require('process');
const { leerJSON, escribirJSON, filtrarPorEstado, crearTarea, guardarTarea, leerPorEstado, eliminarTarea } = require('./tareas');

let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

const accion = process.argv[2];

const titulo = process.argv[3];

const estado = process.argv[4]



switch (accion) {
    case 'listar':
        leerJSON()

        break;
    case 'escribir':
        escribirJSON(titulo, estado)
        break;
    case 'guardar':
        guardarTarea()
        console.log(tareas)
        console.log(`
                     ===================================
                       El Archivo se guardado con exito   
                     ===================================`);
        break;
    case 'eliminar':
        eliminarTarea(titulo, estado)
        break;
    case 'leer':
        leerPorEstado(estado)
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
       =  Las acciones disponibles son : listar, crear, eliminar, filtrar, leer, escribir, guardar =
       ==============================================================
        `)
        break;
    default: console.log(`
   ==============================================================
   =  No entiendo que quieres hacer                             =
   =  Las acciones disponibles son : listar, crear, eliminar, filtrar, leer, escribir, guardar =
   ==============================================================
    `)
        break;
}
