//Toda la información del router
//Nombrado routes para no confundirlo con el express.Router

const express = require('express');
const message = require('../components/messages/network');

const routes = function (server) {
    server.use('/message', message);
};

module.exports = routes;
