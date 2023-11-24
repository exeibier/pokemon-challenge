
import Paginator from '@/Components/Paginator/Paginator'
import PokemonCard from '@/Components/PokemonCard/PokemonCard'
import { getAllPokemons } from '@/services/getPokemons/getPokemons.js'

export default async function Home() {
  const pokemons = await getAllPokemons()


  return (
    <main className="min-h-screen py-24 container mx-auto">
      <div className='grid grid-cols-4 gap-4'>
        {pokemons.results.map((pokemon, idx) => (
          <PokemonCard key={idx} name={pokemon.name} />
        ))
        }
      </div>
      <div className='mt-4'>
        <Paginator pokemonsCount={pokemons.count} prev={pokemons.previous} next={pokemons.next} />
      </div>

    </main>
  )
}
