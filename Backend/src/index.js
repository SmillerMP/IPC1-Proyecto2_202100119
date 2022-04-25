
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Llama la base de datos de pokemons
const pokedex = require('./pokemons.json');

// Llama la base de datos de Usuarios
const Usuarios = require('./usuarios.json');

// Archivo JSON Temporal para la busqeuda de pokemons
const PokeTemporal = require('./pokeTemp.json');



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
    var LoginUsuario = req.body.LoginUsuario;
    var LoginPassword = req.body.LoginPassword;
    for (x of Usuarios) {
        if ((x.User == LoginUsuario) && (x.Password == LoginPassword)) {
            res.send("1");
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


// Ruta de la pokedex
app.post('/BusquedaPokemons', (req, res) => {
    var Found = true;
    var TextoBusqueda = req.body.TextoBusqueda;
    var OpcionesBusqueda = req.body.OpcionesBusqueda;

    

    // Opcion defoult html
    if (capitalize(OpcionesBusqueda) == "Seleccionar") {
        // Codigo error 1: no selecciono ningun tipo de busqueda
        res.send("1");
    }
    // Muestra los datos completos de la Pokedex
    if (capitalize(OpcionesBusqueda)  == "Todos") {
        res.send(pokedex);
        TextoBusqueda = "";


    // Busqueda de pokemos por numero
    } else if (capitalize(OpcionesBusqueda) == "Numero") {
        Found = false;
        for (x of pokedex) {
            if (x.Numero == TextoBusqueda) {
                res.send(x);

                Found = true;
                break;
            }
        }

        if (Found == false) {

            // Codigo error 2: no existe pokemon con este numero
            res.send("2");
        }

    // Busqueda de pokemons por su nombre
    } else if (capitalize(OpcionesBusqueda)  == "Nombre") {
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
            // Codigo error 3: No existe pokemon con este nombre
            res.send("3");
        }


    // Busqueda de Pokemons por su tipo
    } else if (capitalize(OpcionesBusqueda)  == "Tipo") {

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
            // Codigo error 4: No existe pokemons de ese tipo
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

