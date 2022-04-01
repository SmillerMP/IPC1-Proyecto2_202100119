
const express = require('express');


// Creacion de la API
const app = express();


// Salida al puerto
app.set('port',8000);


// routers
// Arrow Function
app.get('/home',(req,res)=>{
    var a =2;
    res.send('Bienvenido a mi primera API');
})


app.get('/pokedex',(req,res)=>{
    res.send('Bienvenido a la podex');
})


// funcion en mi compu
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto:  8000 ');
});