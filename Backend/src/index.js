
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Llama la base de datos de pokemons
const pokedex = require('./pokemons.json');

// Llama la base de datos de Usuarios
const Usuarios = require('./usuarios.json');

// Archivo JSON Temporal para la busqeuda de pokemons
const PokeTemporal = require('./pokeTemp.json');

// Archivo JSON Temporal para el usuario
const UserTemp = require('./userTemp.json');


// Pone en mayuscula la primera letra de la palabra y en minuscula las demas
function capitalize(palabra) {
    return palabra[0].toUpperCase() + palabra.toLowerCase().slice(1);
}


// Creacion de la API
const app = express();



// Salida al puerto
app.set('port', 8000);


// Modulos
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



// Login de los usuarios
app.post('/Login', (req, res) => {
    var Found = true;
    UserTemp.User = "";
    var LoginUsuario = req.body.LoginUsuario;
    var LoginPassword = req.body.LoginPassword;
    for (x of Usuarios) {
        if ((x.User == LoginUsuario) && (x.Password == LoginPassword)) {
            res.send("1");
            UserTemp.User = x.User;
            Found = true;
            break;

        } else {
            Found = false;
        }

    };

    if (Found == false) {
        res.send("0");
    }
})

// Envio del nombre de usuario
app.get('/NombreUser', (req, res) => {
    res.send(UserTemp);
})


// Ruta de la pokedex
app.post('/BusquedaPokemons', (req, res) => {
    var Found = true;
    var TextoBusqueda = req.body.TextoBusqueda;
    var OpcionesBusqueda = req.body.OpcionesBusqueda;


    if (OpcionesBusqueda == "1") {
        res.send("1");
    }
    // Muestra los datos completos de la Pokedex
    if (OpcionesBusqueda == "2") {
        res.send(pokedex);
        TextoBusqueda = "";


    // Busqueda de pokemos por numero
    } else if (OpcionesBusqueda == "3") {
        Found = false;
        for (x of pokedex) {
            if (x.Numero == TextoBusqueda) {
                res.send(x);

                Found = true;
                break;
            }
        }

        if (Found == false) {
            res.send("2");
        }

    // Busqueda de pokemons por su nombre
    } else if (OpcionesBusqueda == "4") {
        Found = false;
        if (TextoBusqueda != "") {
            for (x of pokedex) {

                if (x.Nombre == capitalize(TextoBusqueda)) {
                    res.send(x);

                    Found = true;
                    break;
                }
            }
        }
        if (Found == false) {
            res.send("3");
        }


    // Busqueda de Pokemons por su tipo
    } else if (OpcionesBusqueda == "5") {

        Found = false;
        if (TextoBusqueda != "") {
            PokeTemporal.splice("");
            for (x of pokedex) {
                if (x.Tipo == capitalize(TextoBusqueda)) {

                    // Guarda todos los pokemons del mismo tipo en un json temporal
                    PokeTemporal.push(x);
                    Found = true;
                }
            }
        }
        if (Found == false) {
            res.send("4");

        } else {
            res.send(PokeTemporal);
        }
    }
});

// Enviando en que puerto salen los datas
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto:  8000 ');
});

