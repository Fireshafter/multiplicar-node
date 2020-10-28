const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tabla del numero especificado en un archivo con el nombre de la tabla', opts)
    .command('listar', 'Lista una tabla del numero especificado en la consola para previsualizar el resultado', opts)
    .help()
    .argv

module.exports = { argv }