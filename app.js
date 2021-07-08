var express = require('express');
var app = express();
require('dotenv').config()
const sequelize = require('./APP/conexionDB');
const rutajuguete = require('./APP/vista.js')

app.use(express.json())

async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexión estabilizada correctamente');
        app.listen(process.env.PORT, function() {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
    }
}

inicioServer();

rutajuguete(app);