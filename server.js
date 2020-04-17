const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.headers);
  res.header({
      "custom-header": "Nuestro valor personalizado"
      
  })
  res.send("Lista de mensajes");
});

router.post("/message", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  //res.send(`Mensaje -${req.body.text}- añadido correctamente`);
  //res.send() //respuesta vacía
  //res.status(201).send() //respuesta con estado
  res.status(201).send({error:'', body:'Creado correctamente'}) //respuesta estructurada
});

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
