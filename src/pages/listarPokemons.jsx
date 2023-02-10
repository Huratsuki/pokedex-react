import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import PokemonService from '../services/pokemon.service';
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/Button';
import { deletePokemon } from '../services/httpClientServer';
import { BiTrash } from 'react-icons/bi';
import { HiPencilAlt } from 'react-icons/Hi';
import { Link } from 'react-router-dom';

export default function listarPokemons() {

  const [pokemons, setPokemons] = useState([])
  const pokemonService = new PokemonService()

  useEffect(() => {
    pokemonService.get().then((res) => setPokemons(res.data))
  }, [])

  return (
    <div className='d-flex justify-content-center'>

      <div className='p-2 flex-shrink-1'>
        <NavBar />
      </div>

      <div className='p-2 w-100'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map(pokemon => {
              return (
                <tr key={pokemon.nome}>
                  <td>
                    {pokemon.nome}
                  </td>
                  <td key={pokemon.tipo}>
                    {pokemon.tipo}
                  </td>
                  <td key={pokemon.pokedex}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokedex}.png`} style={{ width: "70px" }} alt="" />
                  </td>
                  <td>
                    <Button variant="btn btn-outline-danger" onClick={() => deletePokemon(pokemon._id)}>
                      <BiTrash />
                    </Button>{' '}
                    <Link className="btn btn-outline-warning" to={`/editarPokemon/${pokemon._id}`}>
                      <HiPencilAlt />
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );

}