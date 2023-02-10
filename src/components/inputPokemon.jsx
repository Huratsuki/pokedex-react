import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { getTipos } from '../services/httpClientServer';

export default function InputPokemon() {
    const [tiposPokemon, setTiposPokemon] = useState([])

    useEffect(() => {
        getTipos().then((res) => setTiposPokemon(res.data))
    }, [])

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome do Pokemon</Form.Label>
                <Form.Control required type="text" placeholder="Digite o nome do pokemon" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Digite n N° da Pokedex</Form.Label>
                <Form.Control required type="text" placeholder="N° da Pokedex" />
            </Form.Group>
            <Form.Select defaultValue={''} required className='bg-light' aria-label="Default select example">
                <option selected value={""}>Selecione o tipo</option>
                {tiposPokemon.map(tipo => {
                    return (
                        <option key={tipo} value={tipo}>{tipo}</option>
                    )
                })}
            </Form.Select>
            <Button className='m-3' variant="primary" type="submit">
                Salvar Pokemon
            </Button>
        </Form>
    );
}

