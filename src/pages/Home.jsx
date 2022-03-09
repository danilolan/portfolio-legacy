import React,{useState} from 'react';
import styles from '../styles/home.module.scss';

import Game from '../components/game'

function Home(props) {
  const [pos, setPos] = useState(0);
  function getPos(pos){
    setPos(pos)
  }
  return (
    <div className={styles.home} style={{transform: `translateX(${pos}px)`}}>
      <div>
        11111OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla OlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOlaOla
        <Game getPos={getPos}/>
      </div>
    </div>
  );
}

export default Home;
