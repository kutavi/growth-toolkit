import { Link } from 'react-router-dom';
import { routes } from '../../utils/configs';
import * as styles from './ActivityCards.module.scss';

const ActivityCards = () => (
  <div className={styles.activityCards}>
    {routes.map(route => (
      <Link
        key={route.route}
        className={styles.card}
        to={route.route}
        aria-label={`Navigate to ${route.label}: ${route.description}`}>
        <div className={styles.header}>
          <img src={route.image} alt={`Image for ${route.label}`} />
          <div className={styles.title}>{route.label}</div>
        </div>
        <div className={styles.description}>{route.description}</div>
      </Link>
    ))}
  </div>
);

export default ActivityCards;
