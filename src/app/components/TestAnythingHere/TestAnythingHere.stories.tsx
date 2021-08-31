import React from 'react';
import TestAnythingHere from './TestAnythingHere';
import styles from './TestAnythingHere.stories.module.css';
export default {
  title: 'Component/Test',
  component: TestAnythingHere,
};

export const test = (): JSX.Element => <TestAnythingHere className={styles.externalClass} />;
