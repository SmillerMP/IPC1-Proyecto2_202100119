
const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');

// Llama la base de datos de pokemons
const pokedex = require('./pokemons.json');

// Llama la base de datos de Usuarios
const Usuarios = require('./usuarios.json');

// Archivo JSON Temporal para la busqeuda de pokemons
const PokeTemporal = require('./pokeTemp.json')

// Pone en mayuscula la primera letra de la palabra
function capitalize(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
}


var NombreUsuario = "";

// Creacion de la API
const app = express();


// Salida al puerto
app.set('port', 8000);

app.use(morgan('dev'));
app.use(express.json());


// Login de los usuarios
app.post('/Login', (req, res) => {
    var Found = true;
    
    var LoginUsuario = req.body.LoginUsuario;
    var LoginPassword = req.body.LoginPassword;

    for (x of Usuarios){
        if((x.User == LoginUsuario ) && (x.Password == LoginPassword)){
            res.send("Bienvenido Usuario " + LoginUsuario);
            NombreUsuario = x.User;
            console.log(NombreUsuario);
            Found = true;
            break;

        } else {
            Found = false;
        }

    };

    if(Found == false){
        res.send("Las credenciales son incorrectas");
    }

    
})


// Ruta de la pokedex
app.post('/pokedex', (req, res) => {
    var Found = true;
    var TextoBusqueda = req.body.TextoBusqueda;
    var OpcionesBusqueda = req.body.OpcionesBusqueda;

  
    // Muestra los datos completos de la Pokedex
    if(((TextoBusqueda == "") && (OpcionesBusqueda == "")) || capitalize(OpcionesBusqueda) == "Todos"){
        pokedex[0].Usuario = NombreUsuario;
        res.send(pokedex);
        TextoBusqueda = "";
        console.log(NombreUsuario);
        



    // Busqueda de pokemos por numero
    } else if (capitalize(OpcionesBusqueda) == "Numero"){
        Found = false;
        for (x of pokedex){
            if(x.Numero == TextoBusqueda ){
                res.send(x);

                Found = true;
                break;
            }
        }
    
        if(Found == false){
            res.send("No se ha encontrado ningun pokemon con este numero");
        }

    // Busqueda de pokemons por su nombre
    } else if (capitalize(OpcionesBusqueda) == "Nombre"){
        Found = false;
        for (x of pokedex){
            if(x.Nombre == capitalize(TextoBusqueda) ){
                res.send(x);

                Found = true;
                break;
            }   
        }
        if(Found == false){
            res.send("No se ha encontrado ningun pokemon con este numero");
        }

    
    // Busqueda de Pokemons por su tipo
    } else if (capitalize(OpcionesBusqueda) == "Tipo"){

        Found = false;
        PokeTemporal.splice("");
        for (x of pokedex){
            if(x.Tipo == capitalize(TextoBusqueda) ){
                
                // Guarda todos los pokemons del mismo tipo en un json temporal
                PokeTemporal.push(x);
                Found = true;
            } 
        }
        if(Found == false){
            res.send("No se ha encontrado ningun pokemon con este Tipo");

        }else{
            res.send(PokeTemporal);
        }

    }

    
});



// Enviando en que puerto salen los datas
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto:  8000 ');
});

