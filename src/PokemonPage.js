import PokemonList from './PokemonList';
import { getAllPokemon } from './services/fetch-utils';
import React, { Component, useEffect, useState } from 'react';


// export default function PokemonPage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [pokemon, setPokemon] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 50;

// //   console.log('||', pokemon);

//   useEffect(() => {
//     async function fetchPokemon() {
//       const from = perPage * (page - 1);
//       const to = page * perPage;
//       const pokemon = await getAllPokemon(from, to, searchQuery);

//       setPokemon(pokemon);
//     }

//     fetchPokemon();

//   }, [page, searchQuery]);


//   return (
//     <>
//       <h2>PokemonPage {page}</h2>
//       <div className='btn-container'>
//         <button onClick={() => {setPage(page - 1);}} disabled={page === 1}>Previous Page</button>
//         <button onClick={() => {setPage(page + 1);}} disabled={pokemon.length < perPage}>Next Page</button>
//       </div>
//       <h4>Search for Pokemon</h4>
//       <input 
//         onChange={(e) => setSearchQuery(e.target.value)}></input>
//       <PokemonList pokemon={pokemon}/>
//     </>
//   );
// }



export default class PokemonPage extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      pokemon: [],
      page: 1,
      perPage: 50
    };
  }

  async componentDidMount() {
    console.log('||', 'pokemon', this.state.pokemon);
    const from = this.state.perPage * (this.state.page - 1);
    const to = this.state.page * this.state.perPage;
    console.log('||', this.state.searchQuery);
    const pokemon = await getAllPokemon(from, to, this.state.searchQuery);
    console.log('||', pokemon);

    this.setState({ pokemon: pokemon });
  }
  
  render() {
    return (
      <div>PokemonPage</div>
    );
  }
}
