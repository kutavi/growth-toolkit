import { Link } from 'gatsby';
import * as styles from './Page.module.scss';

const NotFoundPage = () => (
  <div className={styles.container}>
    <h1>404 - NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...the sadness.</p>
    <h2>Pick one of these</h2>
    <Link className={styles.card} to={'/moving-motivators'}>
      {'Moving Motivators'}
    </Link>
  </div>
);

export default NotFoundPage;
