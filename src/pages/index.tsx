import ActivityCards from '../components/ActivityCards/ActivityCards';
import { SEO } from '../components/Seo/Seo';
import * as styles from './Page.module.scss';

const Home = () => (
  <>
    <SEO />
    <div className={styles.container}>
      <h3>
        A toolkit with exercises and activities to help you on your personal
        development and growth.
      </h3>
      <ActivityCards />
    </div>
  </>
);

export default Home;
