//Capa de red
//Encargada de recibir la petición http, procesar toda la información y enviarla al controlador
//Archivo para todas las rutas de nuestros mensajes

const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        'custom-header': 'Nuestro valor personalizado',
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function (req, res) {
    controller
        .addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(() => {
            response.error(req, res, 'Información inválida', 400);
        });
});

module.exports = router;
