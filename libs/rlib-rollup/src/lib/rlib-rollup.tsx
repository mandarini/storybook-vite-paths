import styles from './rlib-rollup.module.css';

/* eslint-disable-next-line */
export interface RlibRollupProps {}

export function RlibRollup(props: RlibRollupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RlibRollup!</h1>
      <h2>This is an imported lib</h2>
    </div>
  );
}

export default RlibRollup;
