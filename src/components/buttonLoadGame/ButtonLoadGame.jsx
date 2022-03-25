import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss'

const isDesktop = window.innerWidth >= 970

function ButtonLoadGame() {
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const loadGame = localStorage.getItem('loadGame')
        if(loadGame === 'true')
            setIsActive(true)
        else
            setIsActive(false)
    }, []);

    useEffect(() => {
        if(isActive)
            localStorage.setItem('loadGame', true)
        else 
            localStorage.setItem('loadGame', false)     
    }, [isActive]);

    function onClick(){
        setIsActive(!isActive)
        window.location.reload();
    }

    return ( 
        isDesktop ?
        <div className={styles.button_load_game_container}>
            <button onClick={() => onClick()}>
                <div className={styles.check_icon} style={isActive ? {display: 'block'} : {display: 'none'}}/>
            </button>
            Modo jogo
        </div>
        :
        <></>
     );
}

export default ButtonLoadGame;