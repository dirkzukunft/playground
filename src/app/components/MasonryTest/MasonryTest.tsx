import React from 'react';
import styles from './MasonryTest.module.css';
import Masonry from 'react-masonry-component';

export type MasonryTestProps = {
  className?: string;
};

export default function MasonryTest({ className = '' }: MasonryTestProps): JSX.Element {
  return (
    <div className={`${styles.masonryTest} ${className}`}>
      <Masonry updateOnEachImageLoad={true}>
        {<div className={styles.div1}>1</div>}
        {<div className={styles.div2}>2</div>}
        {<div className={styles.div3}>3</div>}
        {<div className={styles.div2}>4</div>}
        {<div className={styles.div3}>5</div>}
        {<div className={styles.div3}>6</div>}
        {<div className={styles.div1}>7</div>}
        {<div className={styles.div2}>8</div>}
        {<div className={styles.div3}>9</div>}
        {<div className={styles.div2}>10</div>}
        {<div className={styles.div3}>11</div>}
        {<div className={styles.div3}>12</div>}
        {<div className={styles.div1}>13</div>}
        {<div className={styles.div2}>14</div>}
        {<div className={styles.div3}>15</div>}
      </Masonry>
    </div>
  );
}
