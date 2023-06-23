import styles from './rlv1.module.css';
import { Rlv2 } from '@vite-sb-paths/rlv2';
import { Rlv3 } from '@vite-sb-paths/rlv3';

/* eslint-disable-next-line */
export interface Rlv1Props {}

export function Rlv1(props: Rlv1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Rlv1!</h1>
      <Rlv2 />
      <Rlv3 />
    </div>
  );
}

export default Rlv1;
