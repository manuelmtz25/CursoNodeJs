const express = require("express");
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function(req, res){
    res.send('Lista de mensajes');
})

router.post('/message', function(req, res){
    res.send('Mensaje añadido');
})

// router.get('/', function(req, res){
//     res.send('Hola desde GET');
// })

// router.post('/', function(req, res){
//     res.send('Hola desde POST');
// })

// app.use("/", function (req, res) {
//   res.send("<h1>Hola</h1>");
// });

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
