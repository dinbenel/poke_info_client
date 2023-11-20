import { Routes, Route } from '@solidjs/router';
import { routes } from './Routes';
import { For } from 'solid-js';
import { Header } from './components';
import PokemonProvider from './providers/Pokemon.provider';

function App() {
  return (
    <div>
      <PokemonProvider>
        <Header />
        <Routes>
          <For each={routes}>
            {({ component, path }) => (
              <Route path={path} component={component} />
            )}
          </For>
        </Routes>
      </PokemonProvider>
    </div>
  );
}

export default App;
