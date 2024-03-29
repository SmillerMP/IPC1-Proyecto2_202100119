async function entrar(){
    let url = 'http://localhost:8000/Login';

    // creando un json
    var data = {
        LoginUsuario: document.getElementById('User').value,
        LoginPassword: document.getElementById('UserPassword').value
    }

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

    if (respuestas == 1 ){
        alert('Bienvenido usuario ' + document.getElementById('User').value);
        location.href = "pokemons.html";
        
        localStorage.setItem('Usuario', document.getElementById('User').value);
    } else{
        alert("Credenciales Incorrectas");
    }
}