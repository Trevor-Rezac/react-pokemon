import { checkError, client } from './client.js';

export async function getAllPokemon() {
  const response = await client
    .from('pokemon')
    .select();

  return checkError(response);
}