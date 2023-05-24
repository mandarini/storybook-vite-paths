import styles from './rlib-vite.module.css';

/* eslint-disable-next-line */
export interface RlibViteProps {}

export function RlibVite(props: RlibViteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RlibVite!</h1>
    </div>
  );
}

export default RlibVite;
