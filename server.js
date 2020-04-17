const express = require("express");
const bodyParser = require("body-parser");
const response=require('./network/response');
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
    //res.send("Lista de mensajes");
    response.success(req, res, 'Lista de mensajes');
});

router.post("/message", function (req, res) {
    console.log(req.query);
    console.log(req.body);
    if(req.query.error=='ok'){
        response.error(req, res, 'Error simulado', 450);
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
    //res.send(`Mensaje -${req.body.text}- añadido correctamente`);
    //res.send() //respuesta vacía
    //res.status(201).send() //respuesta con estado
    //res.status(201).send({error:'', body:'Creado correctamente'}) //respuesta estructurada
    //response.success(req, res, 'Creado correctamente', 201);
});

//todo lo que pongamos en la carpeta "public" quedará expuesto a través de la ruta /app
//ejemplo http://localhost:3000/app/css/style.css
app.use('/app', express.static('public'));

// router.get('/', function(req, res){
//     res.send('Hola desde GET');
// })

// router.post('/', function(req, res){
//     res.send('Hola desde POST');
// })

// app.use("/", function (req, res) {
//     res.send("<h1>Hola</h1>");
// });

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
