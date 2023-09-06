require('colors'); //require del plugin colors
const inquirer = require('inquirer'); //intania de un variable del require del plugin inquirer
const prompt = inquirer.createPromptModule();

// se crea constante con una un arreglo que incluye las opcines diponibles en el menu
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        messge: 'Qué dese hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. Crear tareas`
            },
            {
                value: '2',
                name: `${'2'.red}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.red}. Listar tareas completada`
            },
            {
                value: '4',
                name: `${'4'.red}. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5'.red}. Compleatar tare(s)`
            },
            {
                value: '6',
                name: `${'6'.red}. Borrar tareas`
            },
            {
                value: '0',
                name: `${'0'.red}. Salir`
            }
        ]
    }
]

const inquirerMenu = async () =>{
    console.log("==================================================".green);
    console.log("            Seleccione una opción".blue);
    console.log("==================================================".green);
    let otp = '';
    const opt = await prompt(preguntas).then(data => {
        otp = data ['opcion']
    })

    return otp;
}

const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            messge: `\nPresione ${'ENTER'.green} para continuar\n`

        }
    ]
    let pau = "";
    console.log('\n');
    await inquirer.prompt(question).then(data =>{
        pau = data['message']
    });

    return pau;
}


const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return "Por favor ingresa un valor";
                }
                return true;
            }
        }
    ]
    let leer = "";
    return await inquirer.prompt(question).then(data =>{
        return leer = data['desc']
    });
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}