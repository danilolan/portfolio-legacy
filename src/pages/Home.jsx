import React,{useState, useEffect} from 'react';
import styles from './home.module.scss';

import matter from '../components/game/matter';

import Sprites from '../components/Sprites';
import Content from './content/Content';
import Header from '../components/header/Header';


const isDesktop = false//window.innerWidth >= 970

function Home(props) {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if(isDesktop) matter(setPos) 
  }, []);

  return (
    isDesktop ? 
    <>
      <Header/>
      <div className={styles.home} style={{transform: `translateX(${pos}px)`}}>
        <Content/>  
        <Sprites/>
      </div>

      <div className={styles.bg_close} style={{transform: `translateX(${pos}px)`}}/>
      <div className={styles.bg_far} style={{transform: `translateX(${pos * 0.3}px)`}}/>
    </>
    :
    <>
      <Header/>
      <div className={styles.home}>
        <Content/> 
      </div>
    </>

  );
}

export default Home;
