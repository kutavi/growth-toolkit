import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import { Popover } from '../../library/Popover/Popover';
import { useSettings } from '../../state/hooks/useSettings';
import { routes } from '../../utils/configs';
import { track } from '../../utils/helpers';
import * as styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { isNavigationOpen, updateSettings } = useSettings();

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Popover
        isShown={isNavigationOpen}
        toggle={value => {
          track(`${value ? 'Opened' : 'Closed'} nav menu`)
          updateSettings({ isNavigationOpen: value })
        }}
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
            <div key={route.route}>
              <Link
                partiallyActive
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
            </div>
          ))}
        </div>
      </Popover>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
