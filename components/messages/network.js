//Capa de red
//Encargada de recibir la petición http, procesar toda la información y enviarla al controlador
//Archivo para todas las rutas de nuestros mensajes

const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        'custom-header': 'Nuestro valor personalizado',
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    if (req.query.error == 'ok') {
        response.error(
            req,
            res,
            'Error simulado',
            450,
            'Es sólo una simulación de errores'
        );
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

module.exports = router;
