import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { SEO } from '../../components/Seo/Seo';
import { Button } from '../../library/Button/Button';
import { Popover } from '../../library/Popover/Popover';
import { RadioButtonGroup } from '../../library/RadioButtonGroup/RadioButtonGroup';
import { useResilience } from '../../state/hooks/useResilience';
import { useSettings } from '../../state/hooks/useSettings';
import { Question } from '../../state/reducers/resilience';
import { texts } from '../../utils/configs';
import { track } from '../../utils/helpers';
import * as styles from '../Page.module.scss';

const calculateResilience = (questions: Question[]) => {
  const totalPoints = questions.reduce(
    (previous, current) => previous + current.answer,
    0
  );
  const maxScore = 5.0;
  const totalQuestions = 6;
  const lowRange = { min: 1, max: 2.99 };
  const normalRange = { min: 3, max: 4.3 };
  const score = totalPoints / totalQuestions;
  let result = { text: 'HIGH', style: 'high' };
  if (score >= lowRange.min && score <= lowRange.max) {
    result = { text: 'LOW', style: 'low' };
  }
  if (score >= normalRange.min && score <= normalRange.max) {
    result = { text: 'NORMAL', style: 'normal' };
  }

  return (
    <div className={styles.result}>
      <span className={styles.text}>{'Your resilience is'}</span>
      <span className={`${styles.level} ${styles[result.style]}`}>
        {result.text}
      </span>
      <span className={`${styles.score} ${styles[result.style]}`}>
        {score.toFixed(2)} out of {maxScore.toFixed(2)}
      </span>
    </div>
  );
};

const Home = () => {
  const { isResilienceInfoOpen, updateSettings } = useSettings();
  const { questions, updateResilience } = useResilience();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (showResults) {
      window.scrollTo(0, document?.body?.clientHeight || 0);
    }
  }, [showResults]);
  return (
    <>
      <SEO
        title={texts.resilience.title}
        description={texts.resilience.description}
      />
      <Layout>
        <Popover
          isShown={isResilienceInfoOpen}
          toggle={value => {
            track(`${value ? 'Opened' : 'Closed'} resilience info`);
            updateSettings({ isResilienceInfoOpen: value });
          }}
          position={'top-left'}
          buttonIcon={'help'}
          title={texts.resilience.title}>
          {texts.resilience.info}
        </Popover>
        <Button
          size={'sm'}
          disabled={!Boolean(questions.find(q => q.answer !== 0))}
          type='alert'
          style={{ float: 'right' }}
          onClick={() => {
            track('Reset resilience');
            setShowResults(false);
            const resetQuestions = questions.map(q => ({ ...q, answer: 0 }));
            updateResilience(resetQuestions);
          }}>
          {'Reset'}
        </Button>
        <div className={styles.questionaire}>
          {questions.map((question, index) => {
            const points = question.points;
            return (
              <div className={styles.question} key={question.id}>
                <p>
                  {index + 1}. {question.question}
                </p>
                <RadioButtonGroup
                  groupName={question.id}
                  selectedValue={question.answer}
                  onSelect={value => {
                    track('Update resilience question');
                    const newQuestions = questions.map(q =>
                      q.id === question.id ? { ...q, answer: value } : q
                    );
                    updateResilience(newQuestions);
                    setShowResults(false);
                  }}
                  options={[
                    { value: points[0], label: 'Strongly Disagree' },
                    { value: points[1], label: 'Disagree' },
                    // tslint:disable-next-line: no-magic-numbers
                    { value: points[2], label: 'Neutral' },
                    // tslint:disable-next-line: no-magic-numbers
                    { value: points[3], label: 'Agree' },
                    // tslint:disable-next-line: no-magic-numbers
                    { value: points[4], label: 'Strongly Agree' },
                  ]}
                />
              </div>
            );
          })}
        </div>
        {!showResults ? (
          <Button
            disabled={Boolean(questions.find(q => q.answer === 0))}
            fullWidth
            onClick={() => {
              track('Check resilience');
              setShowResults(true);
            }}>
            {'Check my resilience'}
          </Button>
        ) : (
          calculateResilience(questions)
        )}
      </Layout>
    </>
  );
};

export default Home;
