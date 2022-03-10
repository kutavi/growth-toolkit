import * as styles from './Loader.module.scss';

export const Loader = () => (
  <>
    <div className={styles.loaderCircle}>
      <div></div>
    </div>
    <div className={styles.loaderText}>Loading...</div>
  </>
);
