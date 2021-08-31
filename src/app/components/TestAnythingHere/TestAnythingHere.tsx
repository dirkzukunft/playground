import React from 'react';
import styles from './TestAnythingHere.module.css';

export type TestAnythingHereProps = {
  className?: string;
};

export default function TestAnythingHere({ className }: TestAnythingHereProps): JSX.Element {
  return (
    <div className={`${styles.testAnythingHere} ${className}`}>
      TestAnythingHere TestAnythingHere TestAnythingHere TestAnythingHere
    </div>
  );
}
