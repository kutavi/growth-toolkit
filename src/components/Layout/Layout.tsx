import { Header } from '../Header/Header';
import * as styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
  </div>
);
