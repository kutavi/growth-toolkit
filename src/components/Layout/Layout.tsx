import { Link } from 'gatsby';
import { Popover } from '../../library/Popover/Popover';
import { useSettings } from '../../state/hooks/useSettings';
import { routes } from '../../utils/configs';
import * as styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { isNavigationOpen, updateSettings } = useSettings();
  return (
    <div className={styles.container}>
      <Popover
        isShown={isNavigationOpen}
        toggle={value => updateSettings({ isNavigationOpen: value })}
        position={'top-right'}
        title={'Toolkit'}
        buttonIcon={'menu'}>
        <div className={styles.menu}>
          <Link
            key={'home'}
            className={styles.item}
            to={'/'}
            activeClassName={styles.activeItem}>
            {'Home'}
          </Link>
          {routes.map(route => (
            <>
              <Link
                partiallyActive
                key={route.route}
                className={styles.item}
                to={route.route}
                activeClassName={styles.activeItem}>
                {route.label}
              </Link>
              {route.routes && (
                <div className={styles.submenu}>
                  {route.routes.map((subroute, index) => (
                    <Link
                      key={subroute.route}
                      className={styles.item}
                      to={subroute.route}
                      activeClassName={styles.activeItem}>
                      {`${index + 1}. ${subroute.label}`}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      </Popover>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
