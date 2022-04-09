
async function BusquedaPokemons(){
    let url = 'http://localhost:8000/BusquedaPokemons';

    // creando un json
    var data = {
        TextoBusqueda: document.getElementById('DatoBusqueda').value,
        OpcionesBusqueda: document.getElementById('TipoBusqueda').value
    }

    console.log(data)
    

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

    


    switch(respuestas){
        case 1:
            alert("Debe seleccionar un tipo de busqueda");
            break;
        
        case 2:
            alert("No se ha encontrado ningun pokemon con este Numero");
            break;

        case 3:
            alert("No se ha encontrado ningun pokemon con este Nombre");
            break;

        case 4:
            alert("No se ha encontrado ningun pokemon de este Tipo");
            break; 
            
        default:

            let datos = document.querySelector('#cuerpo')
            datos.innerHTML = '';
            var id = 0;
            if(respuestas.length == undefined){
                id =1;
                datos.innerHTML += "<tr><td>" +
                    id+
                    "</td><td>" +
                    respuestas.Numero +
                    "</td><td>" +
                    respuestas.Nombre +
                    "</td><td>" +
                    respuestas.Tipo +
                    "</td><td>" +
                    respuestas.Ataque +
                    "</td></tr>";

            }else{
                for(let x of respuestas){
                    id++;
                    datos.innerHTML += "<tr><td>" +
                    id+
                    "</td><td>" +
                    x.Numero +
                    "</td><td>" +
                    x.Nombre +
                    "</td><td>" +
                    x.Tipo +
                    "</td><td>" +
                    x.Ataque +
                    "</td></tr>";
    
                }
            }
            
    }

}