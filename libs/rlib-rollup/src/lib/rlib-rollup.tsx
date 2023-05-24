import styles from './rlib-rollup.module.css';

/* eslint-disable-next-line */
export interface RlibRollupProps {}

export function RlibRollup(props: RlibRollupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RlibRollup!</h1>
    </div>
  );
}

export default RlibRollup;
