import React, { Component } from 'react';
import Pokemon from './Pokemon';

// export default function PokemonList({ pokemon }) {
  
//   return (
//     <>
//       <div className='pokemon-list'>
//         {pokemon.map((pokemon, i) => <Pokemon key={`${pokemon}-${i}`} pokemon={pokemon} />)}
//       </div>
//     </>
//   );
// }



export default class PokemonList extends Component {
  render() {
    const { pokemon } = this.props;
    
    return (
      <>
        <div className='pokemon-list'>
          {pokemon.map((pokemon, i) => <Pokemon key={`${pokemon}-${i}`} pokemon={pokemon} />)}
        </div>
      </>
    );
  }
}
