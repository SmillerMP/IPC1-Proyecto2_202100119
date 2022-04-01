
const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');

// Llama la base de datos de pokemons
const pokedex = require('./pokemons.json');

// Llama la base de datos de Usuarios
const Usuarios = require('./usuarios.json');

// Creacion de la API
const app = express();


// Salida al puerto
app.set('port', 8000);

app.use(morgan('dev'));
app.use(express.json());




// Rutas
app.get('/', (req, res) => {
    res.send("Bienvenido a la pantalla principal Mother Fucker")
})


app.get('/home', (req, res) => {
    var a = 2;
    res.send('Bienvenido a mi primera API');
})

// Ruta de la pokedex
app.get('/pokedex', (req, res) => {
    res.send(pokedex);
})

// Login de los usuarios
app.post('/Login', (req, res) => {
    var dato1 = req.body.dato1;
    var dato2 = req.body.dato2;
    var suma = dato1 + dato2;
    var respuesta = {
        "titulo":"Operacion",
        "resultado":suma
    }
    res.send(respuesta);
    
})


// Enviando en que puerto salen los datas
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto:  8000 ');
});

