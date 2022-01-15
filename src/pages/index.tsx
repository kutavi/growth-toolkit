import ActivityCards from './activity-cards';
import * as styles from './Page.module.scss';

const Home = () => (
  <div className={styles.container}>
    <h3>
      A toolkit with exercises and activities to help you on your personal
      development and growth.
    </h3>
    <ActivityCards />
  </div>
);

export default Home;
