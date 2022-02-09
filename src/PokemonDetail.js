import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePokemon } from './services/fetch-utils';
import { Link } from 'react-router-dom';


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

  // console.log('||', pokemon);

  function handleClick() {
    window.location.href = pokemon.pokedex;
  }

  return (
    <> <Link to='/'>Home</Link>
      <div>PokemonDetail</div>
      <h2 className='poke-name'> {pokemon.pokemon} 
      </h2>
      <p>HP: {pokemon.hp}</p>
      <img 
        className='poke-image' 
        src={`${pokemon.url_image}`} 
        onClick={handleClick}>
      </img>
      <p>Type1: {pokemon.type_1}</p>
      <p>Type2: {pokemon.type_2}</p>
      <p>Ability1: {pokemon.ability_1}</p>
      <p>Attack: {pokemon.attack}</p>
    </>
  );
}
