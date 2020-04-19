//Capa de red
//Encargada de recibir la petición http, procesar toda la información y enviarla al controlador
//Archivo para todas las rutas de nuestros mensajes

const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    controller
        .getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
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

router.patch('/:id', function (req, res) {
    controller
        .updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;
