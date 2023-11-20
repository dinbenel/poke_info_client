import { httpClient } from '@/lib/http.client';
import { IPokemon } from '@/types/pokemon.type';

class PokemonApi {
  async getAllPokemon() {
    try {
      const { data } = await httpClient.httpClient.get<IPokemon[]>(
        'api/pokemon'
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async createPokemon() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async updatePokemon() {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}

export const pokeApi = new PokemonApi();
