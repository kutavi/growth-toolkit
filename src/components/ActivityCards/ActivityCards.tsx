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
          <picture>
            <source srcSet={route.imageWebP} type='image/webp' />
            <img
              src={route.image}
              alt={`Image for ${route.label}`}
              loading='eager'
              fetchpriority='high'
            />
          </picture>
          <div className={styles.title}>{route.label}</div>
        </div>
        <div className={styles.description}>{route.description}</div>
      </Link>
    ))}
  </div>
);

export default ActivityCards;
