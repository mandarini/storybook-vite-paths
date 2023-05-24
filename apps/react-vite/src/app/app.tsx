// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { RlibVite } from '@vite-sb-paths/rlib-vite';
import { jslibVite } from '@vite-sb-paths/jslib-vite';

console.log('jslibVite', jslibVite);
export function App() {
  return (
    <div>
      <h1>Hi Katerina</h1>
      <RlibVite />
    </div>
  );
}

export default App;
