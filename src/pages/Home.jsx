import React, {useEffect} from 'react';
import styles from '../styles/home.module.scss';

import Game from '../components/game'

function Home() {
  return (
    <div className={styles.home}>
      <div>
        Ola
        <Game/>
      </div>
    </div>
  );
}

export default Home;
