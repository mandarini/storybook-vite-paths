// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { RlibVite } from '@vite-sb-paths/rlib-vite';
import { ReactNobundler } from '@vite-sb-paths/react-nobundler';
import { jslibVite } from '@vite-sb-paths/jslib-vite';

console.log(jslibVite());

export function App() {
  return (
    <div>
      <h1>Hi Katerina</h1>
      <RlibVite />
      <ReactNobundler />
    </div>
  );
}

export default App;
