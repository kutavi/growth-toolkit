import { Link } from 'gatsby';
import { routes } from '../model/configs';
import * as styles from './Page.module.scss';

const ActivityCards = () => (
  <>
    {routes.map(route => (
      <Link className={styles.card} to={route.route}>
        <img src={route.image} />
        <div className={styles.title}>{route.label}</div>
        <div className={styles.description}>{route.description}</div>
      </Link>
    ))}
  </>
);

export default ActivityCards;
