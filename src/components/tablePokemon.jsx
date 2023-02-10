import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { getPokemons } from '../services/httpClientServer';
import Button from 'react-bootstrap/Button';
import { deletePokemon } from '../services/httpClientServer';
import { BiTrash } from 'react-icons/bi';
import { HiPencilAlt } from 'react-icons/Hi';
import { Link } from 'react-router-dom';

export default function TablePokemon() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons().then((res) => setPokemons(res.data))
  }, [])

  return (
    <Table strip bordered hover>
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
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokedex}.png`} style={{ width: "100px" }} alt="" />
              </td>
              <td>
                <Button variant="btn btn-outline-danger" onClick={() => deletePokemon(pokemon._id)}>
                  <BiTrash />
                </Button>{' '}
                <Link className="btn btn-outline-warning" to={`/editarPokemon/${pokemon.id}`}>
                  <HiPencilAlt />
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );

}