import React, { useEffect, useState } from 'react';
import styles from './Fonts.module.css';

export default function Fonts(): JSX.Element {
  const [fonts, setFonts] = useState({});

  useEffect(() => {
    async function fetchFonts() {
      const fetchedFonts = await loadFonts();
      setFonts(fetchedFonts);
    }
    fetchFonts();
  }, []);

  const fontsList = Object.keys(fonts).map((key) => key);

  return (
    <div className={styles.fonts}>
      <link href="https://pagecdn.io/lib/easyfonts/fonts.css" rel="stylesheet" />
      <div className={styles.fontDetails}>
        {fontsList.map((font) => (
          <div className={`font-${font}`} key={font}>
            {font}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto!
          </div>
        ))}
      </div>
    </div>
  );
}

async function loadFonts(): Promise<string> {
  // https://pagecdn.com/lib/easyfonts
  const response = await fetch('https://pagecdn.io/lib/easyfonts/info/fonts.json');
  const fetchedFonts = await response.json();
  return fetchedFonts;
}
