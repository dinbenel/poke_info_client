import { pokeApi } from '@/api/pokemon.api';
import { usePokemon } from '@/providers/Pokemon.provider';
import { Suspense, createResource } from 'solid-js';

const PokemonList = () => {
  const [state] = createResource(pokeApi.getAllPokemon, {
    name: '[pokemon] get all',
  });
  const store = usePokemon();
  console.log(store.store);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>ppp</p>
    </Suspense>
  );
};

export default PokemonList;
