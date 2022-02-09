import React from 'react';

export default function Pokemon({ pokemon }) {
//   console.log('||', pokemon);
  return (
    <div>
      {pokemon.id}
      {pokemon.pokemon}
      <img src={pokemon.url_image}></img>
    </div>
  );
}
