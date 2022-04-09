
function GetPokemons(){
    let url = 'http://localhost:8000/Pokedex';
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
    })
}
