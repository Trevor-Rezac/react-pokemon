import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePokemon } from './services/fetch-utils';


export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const pokemon = await getSinglePokemon(params.id);

      setPokemon(pokemon);
    }

    fetchData();

  }, [params.id]);

  console.log('||', pokemon);

  return (
    <>
      <div>PokemonDetail</div>
      <h2> {pokemon.pokemon} 
      </h2>
    </>
  );
}
