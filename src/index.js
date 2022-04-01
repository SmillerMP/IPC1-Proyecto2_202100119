
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
});


app.get('/home', (req, res) => {
    var a = 2;
    res.send('Bienvenido a mi primera API');
});

// Ruta de la pokedex
app.post('/pokedex', (req, res) => {
    var Found = true;
    var TextoBusqueda = req.body.TextoBusqueda;
    var OpcionesBusqueda = req.body.OpcionesBusqueda;

  

    if(((TextoBusqueda == "") && (OpcionesBusqueda == "")) || OpcionesBusqueda == "Todos"){
        res.send(pokedex);

    } else if (OpcionesBusqueda == "Numero"){
        for (x of pokedex){
            if(x.Numero == TextoBusqueda ){
                res.send(x);

                Found = true;
                break;
    
            } else {
                Found = false;
            }
    
        };
    
        if(Found == false){
            res.send("No se ha encontrado ningun pokemon con este numero");
        }
    }


    
});

// Login de los usuarios
app.post('/Login', (req, res) => {
    var Found = true;
    
    var LoginUsuario = req.body.LoginUsuario;
    var LoginPassword = req.body.LoginPassword;

    for (x of Usuarios){
        if((x.User == LoginUsuario ) && (x.Password == LoginPassword)){
            res.send("Bienvenido Usuario " + LoginUsuario);
            Found = true;
            break;

        } else {
            Found = false;
        }

    };

    if(Found == false){
        res.send("Las credenciales son incorrectas");
    }

    
});


// Enviando en que puerto salen los datas
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto:  8000 ');
});

