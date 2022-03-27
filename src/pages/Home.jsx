import React,{useState, useEffect} from 'react';
import styles from './home.module.scss';

import matter from '../components/game/matter';

import Sprites from '../components/Sprites';
import Content from './content/Content';
import Header from '../components/header/Header';
import ButtonLoadGame from '../components/buttonLoadGame/ButtonLoadGame';
import { use } from 'matter-js';

const isDesktop = window.innerWidth >= 970
let loadGame = true
if(localStorage.getItem('loadGame') === 'true'){
  loadGame = isDesktop ? true : false
}
else if(localStorage.getItem('loadGame') === 'false'){
  loadGame = false
}
else{
  loadGame = isDesktop ? true : false
}

let cont = 0

function Home(props) {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if(loadGame) matter(setPos)  

    window.addEventListener("wheel", event => {
      if(event.deltaY < 0){
        cont += 25
        if(cont > 0) cont = 0
        setPos(cont)
      }
      else{
        cont -= 25
        setPos(cont)
      }
    })

  }, []);

  console.log(pos)

  useEffect(() => {
    
  }, [pos]);

  


  return (
    loadGame ? 
    <>
      <Header/>

      <div className={styles.home} style={{transform: `translateX(${pos}px)`}}>
        <Content/>  
        <Sprites/>
      </div>

      <ButtonLoadGame/>
      

      <div className={styles.bg_close} style={{transform: `translateX(${pos}px)`}}/>
      <div className={styles.bg_far} style={{transform: `translateX(${pos * 0.3}px)`}}/>
    </>
    :
    <>
      <Header/>

      <div className={styles.home} style={{transform: `translateX(${pos}px)`, transition: '0.3s'}}>
        <Content/> 
      </div>
      
      <ButtonLoadGame/>
    </>

  );
}

export default Home;
