const juguetes = require('./modelo')

module.exports.altajuguete = async(datosJuguete) => {
    let datos = datosJuguete
    try {
        let resultado = await juguetes.alta(datos)
        console.log(resultado);
        if (resultado === true) {
            return resultado
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.obtenerjuguetes = async() => {
    try {
        let resultado = await juguetes.consultarJuguetes()
        if (resultado === undefined) {
            return false
        } else {
            return resultado
        }
    } catch (error) {

    }
}