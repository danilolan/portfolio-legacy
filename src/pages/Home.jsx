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
          11111OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla
        </section>
          
        <Sprites/>
      </div>

      <div className={styles.bg_close} style={{transform: `translateX(${pos}px)`}}/>
      <div className={styles.bg_far} style={{transform: `translateX(${pos * 0.6}px)`}}/>
    </>
  );
}

export default Home;
