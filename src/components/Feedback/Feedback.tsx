import { useState } from 'react';
import { Button } from '../../library/Button/Button';
import { Icon } from '../../library/Icon/Icon';
import { InputArea } from '../../library/InputArea/InputArea';
import { Popover } from '../../library/Popover/Popover';
import * as colors from '../../styles/_base.module.scss';
import { track } from '../../utils/helpers';
import * as styles from './Feedback.module.scss';

const Feedback = () => {
  const [isFeedbackOpen, setFeedbackView] = useState(false);
  const [message, setMessage] = useState('');
  const [sentFeedback, setSentFeedback] = useState(false);

  return (
    <Popover
      isShown={isFeedbackOpen}
      toggle={value => {
        track(`${value ? 'Opened' : 'Closed'} feedback form`);
        setFeedbackView(value);
      }}
      position={'bottomRight'}
      title={'Feedback'}
      buttonLabel={'Feedback'}
      buttonIcon={'exclamation'}>
      <div className={styles.content}>
        {!sentFeedback ? (
          <>
            <div>{'Hello! Do you...'}</div>
            <ul>
              <li>{'have a tool you wish to see a digital version of?'}</li>
              <li>{'encountered any issues?'}</li>
              <li>{'want to share your thoughts about this site?'}</li>
            </ul>
            <InputArea
              placeholder='You can use this form to send me your feedback.'
              name='feedback'
              value={message}
              onChange={value => setMessage(value)}
            />
            <Button
              disabled={!message.trim()}
              className={styles.send}
              type={'secondary'}
              onClick={() => {
                setSentFeedback(true);
                setMessage('');
                setTimeout(() => {
                  setSentFeedback(false);
                  setFeedbackView(false);
                }, 1000);
                track('REPORT', { value: `feedback from user: ${message}` });
              }}>
              {'Send'}
            </Button>
          </>
        ) : (
          <div className={styles.success}>
            <Icon icon='check' size={42} color={colors.yes} />
            {'Thank you!'}
          </div>
        )}
      </div>
    </Popover>
  );
};

export default Feedback;
