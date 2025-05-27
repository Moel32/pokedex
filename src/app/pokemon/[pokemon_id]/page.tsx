'use client'
import Pokemon from '@/model/pokemon';
import { useEffect, useState } from 'react';
import { Container, Image, Spinner, Row } from 'react-bootstrap';
import PokemonComponent from './pokemon';
import PokeNavBar from '@/components/pokeNavBarComp';

type Params = {
    params: { pokemon_id: string }
}

// Change to async function
export default async function PokemonPage({ params }: Params) {
    const pokemon_id = params.pokemon_id;

    // Fetch data on the server side
    let pokemon: Pokemon | undefined = undefined;
    let isPokemonLoaded = false;

    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/pokemon/${pokemon_id}`);
        if (resp.ok) {
            pokemon = await resp.json();
        }
        isPokemonLoaded = true;
    } catch (error) {
        console.error(error);
        isPokemonLoaded = true;
    }

    return (
        <>
            <PokeNavBar />
            {
                isPokemonLoaded ? (
                    pokemon ? (
                        <PokemonComponent pokemon={pokemon} />
                    ) : (
                        <Image
                            className='img-fluid mx-auto d-block rounded'
                            src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
                            alt="Pokemon"
                        />
                    )
                ) : (
                    <Container>
                        <Row className="justify-content-md-center p-2">
                            <Spinner className='p-2' animation='border' role='status' />
                        </Row>
                        <Row className="justify-content-md-center p-2">
                            Loading Pokémon...
                        </Row>
                    </Container>
                )
            }
        </>
    );
}
