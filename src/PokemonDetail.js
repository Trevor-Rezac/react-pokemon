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

  return (
    <> <Link to='/'>Home</Link>
      <div>PokemonDetail</div>
      <h2> {pokemon.pokemon} 
      </h2>
      <p>HP: {pokemon.hp}</p>
      <img src={`${pokemon.url_image}`}></img>
      <p>Type1: {pokemon.type_1}</p>
      <p>Type2: {pokemon.type_2}</p>
      <p>Ability1: {pokemon.ability_1}</p>
      <p>Attack: {pokemon.attack}</p>
    </>
  );
}
