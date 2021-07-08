const sequelize = require('./conexionDB')
module.exports = class Datos {
    constructor(datos) {
        this.datos = datos
    }


    static async alta(data) {
        let datosJuguete = [
            data.descripcion,
            data.precio,
            data.tamano
        ]
        try {
            let resultado = await sequelize.query(`INSERT INTO Juguete (descripcion_juguete, precio_juguete, tamano_juguete) VALUES (?, ?, ?)`, {
                replacements: datosJuguete,
                type: sequelize.QueryTypes.SELECT
            })
            if (resultado) {
                return true
            }
        } catch (error) {
            console.log(error);
            throw new Error('Error al hacer la alta en la BD')
        }
    }

    static async consultarJuguetes() {
        try {
            let juguetes = await sequelize.query(`SELECT *FROM Juguete`)
            return juguetes[0];
        } catch (error) {
            console.log(error);
            throw new Error('Error al hacer la consulta en la BD')
        }
    }



}