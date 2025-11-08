import React from 'react';
import { Icon } from '../../library/Icon/Icon';
import * as colors from '../../styles/_base.module.scss';
import { track } from '../../utils/helpers';
import * as styles from './ErrorBoundary.module.scss';

interface ErrorState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    track('ERROR', { value: `error log: ${error?.message}` });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <h1 className={styles.title}>
            <Icon icon='bug' size={42} color={colors.noDarker} />
          </h1>
          <h1 className={styles.title}>Oh no! Something went wrong.</h1>
          <h2 className={styles.title}>
            Try refreshing the page or going back
          </h2>
        </>
      );
    }

    return this.props.children;
  }
}
