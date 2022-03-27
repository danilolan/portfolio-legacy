import React from 'react';
import styles from './app.module.scss';
import Home from '../pages/Home'


function App() {
  return (
    <div className={styles.app} id='app'>

        <Home/>

    </div>
  );
}

export default App;
