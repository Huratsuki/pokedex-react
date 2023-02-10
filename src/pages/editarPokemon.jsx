import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import './criarPokemon.css';
import PokemonService from '../services/pokemon.service';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

export default function editarPokemon() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [tiposPokemon, setTiposPokemon] = useState([]);
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [pokedex, setPokedex] = useState('Tipo não digitado')
    const pokemonService = new PokemonService()

    useEffect(() => {
        loadPokemon()
    }, [])

    useEffect(() => {
        pokemonService.getTipos().then((res) => setTiposPokemon(res.data))
    }, [])


    async function handleSubmit(event) {
        event.preventDefault();
        await axios.put(`http://localhost:3000/pokemon/${id}`)
    }


    const loadPokemon = async () => {
        const result = await axios.get(`http://localhost:3000/pokemon/${id}`)
        console.log(result.data)
        
    }

    return (

        <div className='container d-flex justify-content-between '>

            <div className='nav p-2 flex-shrink-1 '>
                <NavBar />
            </div>

            <div className='p-2 w-100'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome do Pokemon</Form.Label>
                        <Form.Control required type="text" placeholder="Digite o nome do pokemon" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Digite n N° da Pokedex</Form.Label>
                        <Form.Control required type="number" placeholder="N° da Pokedex" value={pokedex} onChange={(e) => setPokedex(e.target.value)} />
                    </Form.Group>
                    <Form.Select defaultValue={tipo} required className='bg-light' aria-label="Default select example" onChange={(e) => setTipo(e.target.value)}>
                        <option value={""}>Selecione o tipo</option>
                        {tiposPokemon.map(tipo => {
                            return (
                                <option key={tipo} value={tipo}>{tipo}</option>
                            )
                        })}
                    </Form.Select>
                    <Button className='m-3' variant="primary" type="submit">
                        Editar Pokemon
                    </Button>
                </Form>

            </div>

        </div>
    );
}

