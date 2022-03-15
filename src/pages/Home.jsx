import React,{useState, useEffect} from 'react';
import styles from '../styles/home.module.scss';

import matter from '../components/game/matter';

import Sprites from '../components/Sprites';

function Home(props) {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    matter(setPos)
  }, []);
  return (
    <>
      <div className={styles.home} style={{transform: `translateX(${pos}px)`}}>
        <section className={styles.content}>
          1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20 - 21 - 22 - 23 - 24 - 25 - 26 - 27 - 28 - 29
        </section>
          
        <Sprites/>
      </div>
      <div className={styles.bg_close} style={{transform: `translateX(${pos}px)`}}/>
      <div className={styles.bg_far} style={{transform: `translateX(${pos * 0.3}px)`}}/>
    </>
  );
}

export default Home;
