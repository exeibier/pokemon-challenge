
export const getAllPokemons = async (url = `${process.env.API_URL}/pokemon/`) => {
    const response = await fetch(url)
    
    return response.json()
}

export const getPokemon = async (pokemonName) => {
    const response = await fetch(`${process.env.API_URL}/pokemon/${pokemonName}`)

    return response.json()
}