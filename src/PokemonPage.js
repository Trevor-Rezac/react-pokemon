import { useEffect, useState } from 'react';
import { getAllPokemon } from './services/fetch-utils';

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  console.log('||', pokemon);

  useEffect(() => {
    async function fetchPokemon() {
      const pokemon = await getAllPokemon();

      setPokemon(pokemon);
    }

    fetchPokemon();

  }, []);
  return (
    <div>PokemonPage</div>
  );
}
