import styles from './rlib-none.module.css';

/* eslint-disable-next-line */
export interface RlibNoneProps {}

export function RlibNone(props: RlibNoneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RlibNone!</h1>
    </div>
  );
}

export default RlibNone;
