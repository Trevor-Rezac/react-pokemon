import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
//   console.log('||', pokemon);
  return (
    <Link to={`/pokemon-detail/${pokemon.id}`}>
      <div className='pokemon'>
      ({pokemon.id})
        {pokemon.pokemon}
        <img src={pokemon.url_image}></img>
      </div>
    </Link>
  );
}
