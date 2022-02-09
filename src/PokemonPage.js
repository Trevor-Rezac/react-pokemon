import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { getAllPokemon } from './services/fetch-utils';


export default function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 50;

//   console.log('||', pokemon);

  useEffect(() => {
    async function fetchPokemon() {
      const from = perPage * (page - 1);
      const to = page * perPage;
      const pokemon = await getAllPokemon(from, to);


      setPokemon(pokemon);
    }

    fetchPokemon();

  }, [page]);


  return (
    <>
      <div>PokemonPage {page}</div>
      <div className='btn-container'>
        <button onClick={() => {setPage(page - 1);}} disabled={page === 1}>Previous Page</button>
        <button onClick={() => {setPage(page + 1);}} disabled={pokemon.length < perPage}>Next Page</button>
      </div>
      <PokemonList pokemon={pokemon}/>
    </>
  );
}
