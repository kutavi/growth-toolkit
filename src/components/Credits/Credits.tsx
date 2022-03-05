import * as styles from './Credits.module.scss';

const Credits = () => (
  <div className={styles.wrapper}>
  <h3>{'Credits'}</h3>
  <ul>
    <li>Site's favicon - Leaf icon - <a target="_blank" href="https://www.flaticon.com/authors/roundicons" title="leaf icon">created by Roundicons - Flaticon</a></li>
    <li>Moving motivators images and concept created by{' '}
    <a target="_blank" href='https://management30.com/practice/moving-motivators/' title="management 3.0 moving motivators">management 3.0, Jurgen Appelo</a>
    </li>
  </ul>
  <h3>{'About this project'}</h3>
  <ul>
    <li>This project is open source! Check it out on{' '}
      <a target="_blank" href='https://github.com/kutavi/growth-toolkit'>{'Github'}</a>
    </li>
  </ul>
  <div className={styles.support}>
    <span>If you find this site useful, consider buying me a coffee ❤️</span>
  <a href='https://www.buymeacoffee.com/atseniklidou' target={'_blank'}>
    <img alt='buy me a coffee' src='https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=atseniklidou&button_colour=eab308&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff' />
  </a>
  </div>
  </div>
);

export default Credits;
