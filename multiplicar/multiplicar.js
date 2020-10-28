const fs = require('fs')
const colors = require('colors')

let crearTabla = (base, limite) =>{

    return new Promise((resolve, reject) => {

        let titulo = `Tabla del ${base}.txt`
        let tabla = `${titulo}\n------------\n`
        const start = new Date(Date.now())


        if((new String(Math.PI).startsWith(new String(base))) && Math.floor(base*100)/100 === 3.14)
            titulo = 'Tabla de PI.txt'

        if(!Number(base))
            return reject(`No se puede calcular la tabla de "${base}" ya que no es un número`)

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} x ${i} = ${base*i}\n`
        }

        tabla+=`------------\nEsta tabla ha sido generada por multiplicar.js en ${(new Date(Date.now()).getTime() - start.getTime())/1000} segundos.`

        fs.writeFile(`tablas/${titulo}`, tabla, (err) => {

            if(err)
                reject(`Error escribiendo la tabla del ${base} en archivo "Tabla del ${base}.txt"`)
            else
                resolve(`Tabla del ${base} guardada en el archivo "${titulo}" ` + `correctamente!!`.rainbow
                )
        })

        
    })
    
}


let listarTabla = async (base, limite) => {

    const start = new Date(Date.now())
    
    console.log(`Tabla del ${base}\n-----------`.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} x ${i} = ${base*i}`);

    }

    console.log(`\n-----------\nSe ha completado el calculo en ${(new Date(Date.now()).getTime() - start.getTime())/1000} secs.`);

}

module.exports = { crearTabla, listarTabla }