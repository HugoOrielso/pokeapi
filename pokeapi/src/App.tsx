import { useEffect, useState } from 'react'
import './App.css'

interface Pokemon {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number
  sprites: {
    front_default: string
  }
}

function App() {

  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  async function fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data: Pokemon | null = await response.json()
    setPokemon(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>pokeapi</h1>

      <div className="pokemon-container">
      {
        pokemon ? (
          <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Base Experience: {pokemon.base_experience}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </div >
    </>
  )
}

export default App
