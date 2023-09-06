require("colors");

const mostrarMenu = () =>{
    return new Promise(resolve => {
        console.clear();
        console.log("==================================================".green);
        console.log("            Seleccione una opción".blue);
        console.log("==================================================".green);
        console.log("".green);
        console.log("1. Crear tareas".grey);
        console.log("2. Listar tareas");
        console.log("3. Listar tareas completadas".grey);
        console.log("4. Listar tareas pendientes");
        console.log("5. Compleatar tare(s)".grey);
        console.log("6. Borrar tareas");
        console.log("0. Salir\n".grey);

        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Elija una opción: ', (opt => {
            readline.close();
            
            resolve(opt);
        }))
    })
}

module.exports = {
    mostrarMenu,
}