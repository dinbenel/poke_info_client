import { IPokemon } from "@/types/pokemon.type";
import { JSX, children, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

interface PokemonStore {
  pokemon: IPokemon[];
}

type Props = {
  children: JSX.Element;
};

const [store, setStore] = createStore<PokemonStore>({
  pokemon: [],
});

const PokeContext = createContext();

const PokemonProvider = (props: Props) => {
  const childrenSignal = children(() => props.children);

  const setState = (pokemon: IPokemon[]) => {
    setStore("pokemon", pokemon);
  };

  return (
    <PokeContext.Provider
      value={{
        setState,
        store,
      }}
    >
      {childrenSignal()}
    </PokeContext.Provider>
  );
};
export const usePokemon = () => useContext(PokeContext)!;
export default PokemonProvider;
