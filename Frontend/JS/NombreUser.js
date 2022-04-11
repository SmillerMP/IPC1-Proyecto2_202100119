function GetUserName() {
    let url = 'http://localhost:8000/NombreUser';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            
            let datos = document.querySelector('#NombreUser')
            datos.innerHTML = '';
            datos.innerHTML +=
            "<p>" +
            "Bienvenido: " + data.User +
            "</p>";

            document.getElementById('NombreUser').value = "";
        })

}