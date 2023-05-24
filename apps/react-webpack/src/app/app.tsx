// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { RlibRollup } from '@vite-sb-paths/rlib-rollup';
import { jslibRollup } from '@vite-sb-paths/jslib-rollup';

console.log('jslibRollup', jslibRollup());

export function App() {
  return (
    <div>
      <h1>Hi Katerina</h1>
      <RlibRollup />
    </div>
  );
}

export default App;
