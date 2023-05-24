import styles from './react-nobundler.module.css';

/* eslint-disable-next-line */
export interface ReactNobundlerProps {}

export function ReactNobundler(props: ReactNobundlerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactNobundler!</h1>
    </div>
  );
}

export default ReactNobundler;
