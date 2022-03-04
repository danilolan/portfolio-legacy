import styles from '../styles/app.module.scss';

import Game from '../components/game'

function App() {
  return (
    <div className={styles.app}>
      <Game/>
    </div>
  );
}

export default App;
