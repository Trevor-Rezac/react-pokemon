import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  
  return (
    <>
      <div>PokemonList</div>
      {pokemon.map((pokemon, i) => <Pokemon key={`${pokemon}-${i}`} pokemon={pokemon} />)}
    </>
  );
}
