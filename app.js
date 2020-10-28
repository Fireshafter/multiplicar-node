const multiplicar = require('./multiplicar/multiplicar')
const { argv } = require('./yargs')
const colors = require('colors')

    let crearTabla = (base, limite) =>{

        multiplicar.crearTabla(base, limite)
            .then(res => console.log(res))
            .catch(err => console.error('Error: ' + err))
    }

    let comando = argv._[0]

    switch (comando) {
        case 'listar':
            multiplicar.listarTabla(argv.base, argv.limite)
            break;
        case 'crear':
            crearTabla(argv.base, argv.limite)
            break;
        default:
            console.log(`No existe el comando ${comando}`);
            break;
    }


    
