require("colors");
const { mostrarMenu } = require("./helpers/mensajes");
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const { guardarDB } = require('./helpers/guardarArchivo');
const Tareas = require('./models/tareas');

console.clear();



const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
            case '3':
                console.log(tareas.listadoArrCompletas);
                break;
            case '4':
                console.log(tareas.listadoArrPendientes);
                break;
            case '5':
                const completar = await leerInput('Ingrese la descripcion de la tarea que desea completar: ');
                tareas.completarTarea(completar);
                break;
            case '6':
                const descBorrar = await leerInput('Ingrese la descripción de la tarea que desea eliminar: ');
                tareas.borrarTarea(descBorrar);
                break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt != '0')

}

main();