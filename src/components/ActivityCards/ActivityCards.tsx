import { Link } from 'gatsby';
import { routes } from '../../utils/configs';
import * as styles from './ActivityCards.module.scss';

const ActivityCards = () => (
  <div className={styles.activityCards}>
    {routes.map(route => (
      <Link key={route.route} className={styles.card} to={route.route}>
        <img src={route.image} />
        <div className={styles.title}>{route.label}</div>
        <div className={styles.description}>{route.description}</div>
      </Link>
    ))}
  </div>
);

export default ActivityCards;
