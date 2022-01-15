import { Link } from 'gatsby';
import { routes } from '../model/configs';
import * as styles from './Page.module.scss';

const Home = () => (
  <div className={styles.container}>
    <h3>
      A toolkit with exercises and activities to help you on your personal
      development and growth.
    </h3>
    {routes.map(route => (
      <Link className={styles.card} to={route.route}>
        <img src={route.image} />
        <div className={styles.title}>{route.label}</div>
        <div className={styles.description}>{route.description}</div>
      </Link>
    ))}
  </div>
);

export default Home;
