import { IPokemon } from '@/types/pokemon.type';
import { JSX, children, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

interface PokemonStore {
  pokemon: IPokemon[];
}

interface PokemonContext {
  setPokemon: (pokemon: IPokemon[], name: keyof PokemonStore) => void;
  store: PokemonStore;
}

type Props = {
  children: JSX.Element;
};

const [store, setStore] = createStore<PokemonStore>({
  pokemon: [],
});

const PokeContext = createContext<PokemonContext>();

const PokemonProvider = (props: Props) => {
  const childrenSignal = children(() => props.children);

  const setPokemon = (pokemon: IPokemon[], name: keyof PokemonStore) => {
    setStore(name, pokemon);
  };

  return (
    <PokeContext.Provider
      value={{
        setPokemon,
        store,
      }}
    >
      {childrenSignal()}
    </PokeContext.Provider>
  );
};
export const usePokemon = () => useContext(PokeContext)!;
export default PokemonProvider;
