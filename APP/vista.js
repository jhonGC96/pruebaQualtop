const juguete = require('./controlador')
module.exports = async(app) => {
    app.post('/alta', async(req, res) => {
        let datosJuguete = req.body
        try {
            let result = await juguete.altajuguete(datosJuguete)
            if (result === true) {
                res.json('Alta exitosa')
            } else {
                res.json('hubo un error al dar de alta')
            }
        } catch (error) {
            console.log(error);
        }
    })
    app.get('/consulta', async(req, res) => {
        try {
            let result = await juguete.obtenerjuguetes()
            if (result === undefined) {
                res.json('error en la consulta')
            } else {
                res.json(result)
            }
        } catch (error) {

        }
    })

}