import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { getAllPokemon } from './services/fetch-utils';


export default function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

//   console.log('||', pokemon);

  useEffect(() => {
    async function fetchPokemon() {
      const pokemon = await getAllPokemon();

      setPokemon(pokemon);
    }

    fetchPokemon();

  }, []);


  return (
    <>
      <div>PokemonPage {page}</div>
      <PokemonList pokemon={pokemon}/>
    </>
  );
}
