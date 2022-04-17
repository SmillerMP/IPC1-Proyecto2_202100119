
async function BusquedaPokemons(){
    let url = 'http://localhost:8000/BusquedaPokemons';

    // creando un json
    var data = {
        TextoBusqueda: document.getElementById('DatoBusqueda').value,
        OpcionesBusqueda: document.getElementById('TipoBusqueda').value
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

    console.log(respuestas);

    let datos = document.querySelector('#cuerpo');

    switch(respuestas){
        case 1:
            datos.innerHTML = '';
            alert("Debe seleccionar un tipo de busqueda");
            break;
        
        case 2:
            datos.innerHTML = '';
            alert("No se ha encontrado ningun pokemon con este Numero");
            break;

        case 3:
            datos.innerHTML = '';
            alert("No se ha encontrado ningun pokemon con este Nombre");
            break;

        case 4:
            datos.innerHTML = '';
            alert("No se ha encontrado ningun pokemon de este Tipo");
            break; 
            
        default:
            datos.innerHTML = '';
            var id = 0;
            if(respuestas.length == undefined){
                id =1;
                datos.innerHTML +=
                    "<tr><td>" +
                    id+
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

            }else{
                for(let x of respuestas){
                    id++;
                    datos.innerHTML += "<tr><td>" +
                    id+
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