import { Routes, Route } from '@solidjs/router';
import { routes } from './Routes';
import { For } from 'solid-js';
import { Header } from './components';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <For each={routes}>
          {({ component, path }) => <Route path={path} component={component} />}
        </For>
      </Routes>
    </div>
  );
}

export default App;
