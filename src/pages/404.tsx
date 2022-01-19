import ActivityCards from '../components/ActivityCards/ActivityCards';
import * as styles from './Page.module.scss';

const NotFoundPage = () => (
  <div className={styles.container}>
    <h1>404 - NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...the sadness.</p>
    <h2>Pick one of the activities below</h2>
    <ActivityCards />
  </div>
);

export default NotFoundPage;
