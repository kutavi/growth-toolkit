import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Popover } from '../../library/Popover/Popover';
import useIsMobile from '../../state/hooks/useIsMobile';
import { useSettings } from '../../state/hooks/useSettings';
import { routes } from '../../utils/configs';
import { track } from '../../utils/helpers';
import Feedback from '../Feedback/Feedback';
import { Share } from '../Share/Share';
import * as styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { isNavigationOpen, updateSettings } = useSettings();
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    if (isMobile) {
      updateSettings({ isNavigationOpen: false });
    }
  }, [location.pathname, isMobile]);

  return (
    <div className={styles.container}>
      <div className={styles.rightArea}>
        <Share />
        <Popover
          isShown={isNavigationOpen}
          toggle={value => {
            track(`${value ? 'Opened' : 'Closed'} nav menu`);
            updateSettings({ isNavigationOpen: value });
          }}
          title={'Toolkit'}
          buttonLabel={'Toolkit'}
          buttonIcon={'menu'}>
          <div className={styles.menu}>
            <NavLink
              key={'home'}
              to={'/'}
              onClick={() => track('Navigate to Home')}
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.activeItem}` : styles.item
              }
              end>
              {'Home'}
            </NavLink>
            {routes.map(route => (
              <React.Fragment key={route.route}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.item} ${styles.activeItem}`
                      : styles.item
                  }
                  onClick={() => track(`Navigate to ${route.label}`)}
                  to={route.route}>
                  {route.label}
                </NavLink>
                {route.routes && (
                  <div className={styles.submenu}>
                    {route.routes.map((subroute, index) => (
                      <NavLink
                        key={subroute.route}
                        to={subroute.route}
                        end
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.item} ${styles.activeItem}`
                            : styles.item
                        }>
                        {`${index + 1}. ${subroute.label}`}
                      </NavLink>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Popover>
      </div>
      {!isMobile && <Feedback />}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
