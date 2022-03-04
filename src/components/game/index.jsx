import React, {useState} from 'react';
import styles from '../../styles/game.module.scss'

import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

import phaserGame from './game'

function Game() {
    const [initialize, setInitialize] = useState(true)

    return ( 
        <div className={styles.game}>
            <div className={styles.game_display}>
                <IonPhaser game={phaserGame} initialize={initialize} />
            </div>
        </div>
     );
}

export default Game;