const { promisify } = require('util')
const fs = require('fs')

const Convert = require('heic')

const convertirdirectorio = async (rutadirectorio) => {
    let archivos = fs.readdirSync(rutadirectorio, {});
    for (let archivo of archivos) {

        if (archivo.toLowerCase().includes('heic')) {

             await convertir(rutadirectorio+'/'+archivo)



        }
    }

}



const convertir = async (filePath) => {
    console.log("procesando " + filePath)
    // create a class instance
    const convert = new Convert()

    // path to the file to convert


    // .HEIC FILE -> .JPG FILE (with progress bar in terminal)
    return new Promise((resolve, reject) => {
        convert
        .cli(filePath)
        .then(file => resolve(file))
        .catch(err => reject(err))

    })



}
convertirdirectorio('C:/proyectos/img').then(() => { console.log('listo') }).catch((err) => { console.log(err) })