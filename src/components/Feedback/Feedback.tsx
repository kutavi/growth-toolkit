import { useState } from 'react';
import { Button } from '../../library/Button/Button';
import { Popover } from '../../library/Popover/Popover';
import { track } from '../../utils/helpers';
import * as styles from './Feedback.module.scss';

const Feedback = () => {
  const [isFeedbackOpen, setFeedbackView] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <Popover
      isShown={isFeedbackOpen}
      toggle={value => {
        track(`${value ? 'Opened' : 'Closed'} feedback form`);
        setFeedbackView(value);
      }}
      position={'bottomRight'}
      title={'Feedback'}
      buttonIcon={'exclamation'}>
      <div className={styles.content}>
        <div>{'Hello! Do you...'}</div>
        <ul>
          <li>{'have a tool you wish to see a digital version of?'}</li>
          <li>{'encountered any issues?'}</li>
          <li>{'want to share your thoughts about this site?'}</li>
        </ul>
        <textarea
          className={styles.input}
          placeholder='You can use this form to send me your feedback.'
          id='feedback-form'
          name='feedback'
          rows={6}
          onChange={e => setMessage(e.target.value)}
        />
        <Button
          disabled={!message.trim()}
          className={styles.send}
          type={'secondary'}
          onClick={() => {
            setFeedbackView(false);
            setMessage('');
            track('Feedback', { value: message });
          }}>
          {'Send'}
        </Button>
      </div>
    </Popover>
  );
};

export default Feedback;
