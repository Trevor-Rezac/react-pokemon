import { checkError, client } from './client.js';

export async function getAllPokemon(from = 0, to = 50) {
  const response = await client
    .from('pokemon')
    .select()
    .range(from, to);

  return checkError(response);
}

export async function getSinglePokemon(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}