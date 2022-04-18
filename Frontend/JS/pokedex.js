async function BusquedaPokemons() {
    
    
    let url = 'http://localhost:8000/BusquedaPokemons';

    // creando un json
    var data = {
        TextoBusqueda: document.getElementById('DatoBusqueda').value,
        OpcionesBusqueda: document.getElementById('TipoBusqueda').value
    }

    const respuestas = await fetch(url, {
        method: 'POST', // or 'PUT' 
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            return data

        })

        let datos = document.querySelector('#cuerpo');

    switch (respuestas) {
        // Posibles errores desde el 1 hasta el 4
        case 1:
            datos.innerHTML = '';
            document.getElementById("csscolor").href = "/Frontend/CSS/style.css";
            alert("Debe seleccionar un tipo de busqueda");
            break;

        case 2: 
            datos.innerHTML = '';
            document.getElementById("csscolor").href = "/Frontend/CSS/style.css";
            alert("No se ha encontrado ningun pokemon con este Numero");
            break;

        case 3:
            datos.innerHTML = '';
            document.getElementById("csscolor").href = "/Frontend/CSS/style.css";
            alert("No se ha encontrado ningun pokemon con este Nombre");
            break;

        case 4:
            datos.innerHTML = '';
            document.getElementById("csscolor").href = "/Frontend/CSS/style.css";
            alert("No se ha encontrado ningun pokemon de este Tipo");
            break;

        default:
            // Valores correctos en los que el programa entregara los datos del o los Pokemons


            if (document.getElementById('TipoBusqueda').value == 5) {
                var id = 0;

                if (document.getElementById('DatoBusqueda').value == "Fuego" || document.getElementById('DatoBusqueda').value == "fuego") {    
                    document.getElementById("csscolor").href = "/Frontend/CSS/pokemonsFuego.css";

                } else if (document.getElementById('DatoBusqueda').value == "Agua" || document.getElementById('DatoBusqueda').value == "agua"){
                    document.getElementById("csscolor").href = "/Frontend/CSS/pokemonsAgua.css";

                } else if (document.getElementById('DatoBusqueda').value == "Planta" || document.getElementById('DatoBusqueda').value == "planta"){
                    document.getElementById("csscolor").href = "/Frontend/CSS/pokemonsPlanta.css";

                } else if (document.getElementById('DatoBusqueda').value == "Normal" || document.getElementById('DatoBusqueda').value == "normal"){
                    document.getElementById("csscolor").href = "/Frontend/CSS/pokemonsNormal.css";
                }

            } else{
                document.getElementById("csscolor").href = "/Frontend/CSS/style.css";
            }

            

            datos.innerHTML = '';
            var id = 0;
            if (respuestas.length == undefined) {
                id = 1;
                datos.innerHTML +=
                    "<tr><td>" +
                    id +
                    "</td><td>" +
                    "No. " + respuestas.Numero +
                    "</td><td>" +
                    respuestas.Nombre +
                    "</td><td>" +
                    respuestas.Tipo +
                    "</td><td>" +
                    respuestas.Ataque +
                    "</td><td>" +
                    "<img src= " + respuestas.Imagen + ">" +
                    "</td></tr>";

            } else {
                for (let x of respuestas) {
                    id++;
                    datos.innerHTML += "<tr><td>" +
                        id +
                        "</td><td>" +
                        "No. " + x.Numero +
                        "</td><td>" +
                        x.Nombre +
                        "</td><td>" +
                        x.Tipo +
                        "</td><td>" +
                        x.Ataque +
                        "</td><td>" +
                        "<img src= " + x.Imagen + ">" +
                        "</td></tr>";

                }
            }

    }

    document.getElementById('DatoBusqueda').value = "";

}