import { useEffect } from 'react';
import ActivityCards from '../components/ActivityCards/ActivityCards';
import { SEO } from '../components/Seo/Seo';
import { track } from '../utils/helpers';
import * as styles from './Page.module.scss';

const NotFoundPage = () => {
  useEffect(() => {
    track('Hit 404 page');
  }, []);

  return (
    <>
      <SEO />
      <div className={styles.container}>
        <h1>404 - NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <h2>Pick one of the activities below</h2>
        <ActivityCards />
      </div>
    </>
  );
};

export default NotFoundPage;
