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
    <div className={styles.home} style={{transform: `translateX(${pos}px)`}}>
      <div>
        11111OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla
        <canvas id='canvas'/>
        <Sprites/>
      </div>
    </div>
  );
}

export default Home;
