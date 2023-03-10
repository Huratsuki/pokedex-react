import axios from 'axios';
export default class PokemonService {
  async create(nome, tipo, num) {
    return axios.post('http://localhost:3000/pokemon', {
      nome: nome,
      tipo: tipo,
      pokedex: num
    });
  }

  async get() {
    return axios.get('http://localhost:3000/pokemon')
  }

  async getTipos() {
    return axios.get('http://localhost:3000/pokemon/tipos')
  }

  async edit(nome, tipo, num) {
    return axios.put(`http://localhost:3000/pokemon/${id}`, {
      nome: nome,
      tipo: tipo,
      pokedex, num
    });
  }

  async buscarPokemon(id) {
    return axios.get(`http://localhost:3000/pokemon/${id}`)
  }
}