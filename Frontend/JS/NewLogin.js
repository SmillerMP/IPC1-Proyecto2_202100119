

async function entrar(){
    let url = 'http://localhost:8000/Login';

    // creando un json
    var data = {
        LoginUsuario: document.getElementById('User').value,
        LoginPassword: document.getElementById('UserPassword').value
    }

    console.log(data);

    const respuestas = await fetch(url,{
        method: 'POST', // or 'PUT' 
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
        
    })
    console.log(respuestas);

    if (respuestas == 1 ){
        alert('Bienvenido usuario ' + document.getElementById('User').value);
    } else{
        alert("Credenciales Incorrectas");
    }
}