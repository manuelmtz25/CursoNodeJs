const express = require("express");

var app = express();

app.use('/', function(req, res){
    res.send('<h1>Hola</h1>');
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');