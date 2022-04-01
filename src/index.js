
const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');


// Creacion de la API
const app = express();


// Salida al puerto
app.set('port', 8000);

app.use(morgan('dev'));
app.use(express.json());

// Pokemons presentes en la Pokedex
var pokedex = [

    // Pokemons tipo fuegooooooo
    {
        "Numero": "006",
        "Nombre": "Charizard ",
        "Tipo": "Fuego",
        "Ataque": "Giro Fuego",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },

    {
        "Numero": "037",
        "Nombre": "Vulpix",
        "Tipo": "Fuego",
        "Ataque": "Rayo Confuso",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },

    {
        "Numero": "058",
        "Nombre": "Growlithe",
        "Tipo": "Fuego",
        "Ataque": "Garras de Fuego",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },

    {
        "Numero": "077",
        "Nombre": "Ponyta",
        "Tipo": "Fuego",
        "Ataque": "Cola de Fuego",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },

    {
        "Numero": "392",
        "Nombre": "Infernape",
        "Tipo": "Fuego",
        "Ataque": "Vórtice Infernal",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
    },

    // Pokemons tipo Aguaaaaa
    {
        "Numero": "134",
        "Nombre": "Vaporeon",
        "Tipo": "Agua",
        "Ataque": "Rayo Aurora",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },

    {
        "Numero": "350",
        "Nombre": "Milotic",
        "Tipo": "Agua",
        "Ataque": "Golpe Doble",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png"
    },

    {
        "Numero": "818",
        "Nombre": "Inteleon",
        "Tipo": "Agua",
        "Ataque": "Maxibala",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png"
    },

    {
        "Numero": "009",
        "Nombre": "Blastoise",
        "Tipo": "Agua",
        "Ataque": "Hidro Bomba",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },

    {
        "Numero": "121",
        "Nombre": "Starmie",
        "Tipo": "Agua",
        "Ataque": "Sujeción Equilibrada",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    },

    // Pokemons tipo Aguaaaaa
    {
        "Numero": "497",
        "Nombre": "Serperior",
        "Tipo": "Planta",
        "Ataque": "Golpe Cuchillazo",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    },

    {
        "Numero": "154",
        "Nombre": "Meganium",
        "Tipo": "Planta",
        "Ataque": "Rayo Solar",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    },

    {
        "Numero": "071",
        "Nombre": "Victreebel",
        "Tipo": "Planta",
        "Ataque": "Bilis",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    },

    {
        "Numero": "003",
        "Nombre": "Venusaur",
        "Tipo": "Planta",
        "Ataque": "Tifón Solar",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },

    {
        "Numero": "045",
        "Nombre": "Vileplume",
        "Tipo": "Planta",
        "Ataque": "Rociada de Polen",
        "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    },

];

// Usuarios
var Usuarios = [
    {
        "User": "Samuel",
        "Password": "si",
    },

    {
        "User": "Mike",
        "Password": "simon",
    },

    {
        "User": "Little",
        "Password": "claroquesi",
    },
];

// Rutas
app.get('/', (req, res) => {
    res.send("Bienvenido a la pantalla principal Mother Fucker")
})


app.get('/login', (req, res) => {
    res.send("Hola Maestro Pokemon, Ingresa tus Credenciales")
})


app.get('/home', (req, res) => {
    var a = 2;
    res.send('Bienvenido a mi primera API');
})

// Ruta de la pokedex
app.get('/pokedex', (req, res) => {
    res.send(pokedex);
})


// funcion en mi compu
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto:  8000 ');
});