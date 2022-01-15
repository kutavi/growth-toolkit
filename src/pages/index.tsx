import { Link } from 'gatsby';
import * as styles from './Page.module.scss';

const Home = () => 
    <div className={styles.container}>
    <h2>Pick one of these</h2>
    <Link className={styles.card} to={'/moving-motivators'}>
      {'Moving Motivators'}
    </Link>
    </div>;

export default Home;
