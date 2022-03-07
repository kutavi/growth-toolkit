import { globalHistory } from '@reach/router';
import { Link } from 'gatsby';
import { useEffect } from 'react';
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

  useEffect(() => {
    track('Loaded a tool page');
    if (isMobile) {
      return globalHistory.listen(({ action }) => {
        if (action === 'PUSH') updateSettings({ isNavigationOpen: false });
      });
    }
    return;
  }, []);

  return (
    <div className={styles.container}>
      <Share />
      <Popover
        isShown={isNavigationOpen}
        toggle={value => {
          track(`${value ? 'Opened' : 'Closed'} nav menu`);
          updateSettings({ isNavigationOpen: value });
        }}
        position={'topRight'}
        title={'Toolkit'}
        buttonLabel={'Toolkit'}
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
                key={route.route}
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
            </>
          ))}
        </div>
      </Popover>

      {!isMobile && <Feedback />}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
