import React from 'react'
import Image from 'next/image'
import { getPokemon } from '@/services/getPokemons/getPokemons';
import Link from 'next/link';

export default async function  PokemonCard({ name }) {
    const pokemonInfo = await getPokemon(name);

    return (
        <Link href={`/pokemon/${name}` }className='rounded-3xl shadow-inner p-3'>
            <Image
                src={pokemonInfo.sprites?.front_default}
                width={100}
                height={100}
                alt={name}
            />
            <div className='text-center'>{name}</div>
        </Link>
    )
}
