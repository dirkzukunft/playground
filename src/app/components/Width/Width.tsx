import React, { useEffect, useRef, useState } from 'react';
import styles from './Width.module.css';

export type WidthProps = {
  className?: string;
};

export default function Width({ className = '' }: WidthProps): JSX.Element {
  const [width, setWidth] = useState(window.innerWidth);
  const [elWidth, setElWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  window.addEventListener('resize', () => setWidth(window.innerWidth));

  useEffect(() => {
    const el = ref.current;
    el && setElWidth(el.offsetWidth);
  });

  return (
    <div ref={ref} className={`${styles.width} ${className}`}>
      Window width: {width}
      Element width: {elWidth}
    </div>
  );
}
