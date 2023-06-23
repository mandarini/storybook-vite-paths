import styles from './rlib-vite.module.css';
import { Rlv1 } from '@vite-sb-paths/rlv1';
import { Rlv2 } from '@vite-sb-paths/rlv2';
import { Rlv3 } from '@vite-sb-paths/rlv3';

/* eslint-disable-next-line */
export interface RlibViteProps {}

export function RlibVite(props: RlibViteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RlibVite!</h1>
      <h2>This is an imported lib</h2>
      <Rlv1 />
      <Rlv2 />
      <Rlv3 />
    </div>
  );
}

export default RlibVite;
