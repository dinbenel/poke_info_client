import { HttpClient, httpClient } from "@/lib/http.client";
import { IPokemon } from "@/types/pokemon.type";

class PokemonApi {
  constructor(private readonly api: HttpClient) {}

  async getAllPokemon() {
    try {
      const pokemon = await this.api.httpClient.get<IPokemon[]>("");
      return pokemon;
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

export const pokeApi = new PokemonApi(httpClient);
