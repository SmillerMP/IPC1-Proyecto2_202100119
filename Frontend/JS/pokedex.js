
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
    console.log(respuestas);

    switch(respuestas){
        case 0:
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

    }

}