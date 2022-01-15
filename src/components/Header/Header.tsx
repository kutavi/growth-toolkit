import { Link } from 'gatsby';

import { routes } from '../../model/configs';
import * as styles from './Header.module.scss';

export const Header = () => (
  <div className={styles.top}>
    <div className={styles.nav}>
      {routes.map(route => (
        <Link
          key={route.route}
          className={styles.tab}
          activeClassName={styles.active}
          to={route.route}>
          {route.label}
        </Link>
      ))}
    </div>
  </div>
);
