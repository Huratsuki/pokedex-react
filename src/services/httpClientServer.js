import axios from 'axios';

function getPokemons() {

    return axios.get('http://localhost:3000/pokemon')

}
function getTipos() {

    return axios.get('http://localhost:3000/pokemon/tipos')

}

function deletePokemon(id) {

    axios.delete(`http://localhost:3000/pokemon/${id}`)
    .then(location.reload())
}



export { getPokemons, getTipos, deletePokemon }