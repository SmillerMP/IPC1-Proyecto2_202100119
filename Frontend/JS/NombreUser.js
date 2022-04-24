function GetUserName() {
    let value = localStorage.getItem('Usuario');

    let datos = document.querySelector('#NombreUser')
    datos.innerHTML = '';
    datos.innerHTML +=`<p> Bienvenido: ${value} </p>`

}