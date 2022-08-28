import React from 'react';
import { Button } from '../../library/Button/Button';
import { Icon } from '../../library/Icon/Icon';
import { InputArea } from '../../library/InputArea/InputArea';
import * as colors from '../../styles/_colors.module.scss';
import { track } from '../../utils/helpers';
import * as styles from './ErrorBoundary.module.scss';

interface ErrorState {
  hasError: boolean;
  feedback: string;
  sentFeedback: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, feedback: '', sentFeedback: false };
  }

  static getDerivedStateFromError(_: any): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any): void {
    // You can also log the error to an error reporting service
    track('REPORT', { value: `error log: ${error?.message}` });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1 className={styles.title}>Oh no! Something went wrong.</h1>
          <h2 className={styles.title}>
            Try refreshing the page or going back
          </h2>
          {!this.state.sentFeedback ? (
            <div className={styles.feedback}>
              <Icon icon='bug' size={42} color={colors.noDarker} />
              <InputArea
                placeholder='You can use this form to report the issue.'
                name='report-error'
                rows={10}
                value={this.state.feedback}
                onChange={value => this.setState({ feedback: value })}
              />
              <Button
                disabled={!this.state.feedback.trim()}
                className={styles.send}
                type={'secondary'}
                onClick={() => {
                  this.setState({ sentFeedback: true });
                  track('REPORT', { value: `report from user: ${this.state.feedback}` });
                }}>
                {'Send'}
              </Button>
            </div>
          ) : (
            <div className={styles.feedback}>
              <Icon icon='check' size={42} color={colors.yes} />
              {'Thank you for helping out!'}
            </div>
          )}
        </>
      );
    }

    return this.props.children;
  }
}
