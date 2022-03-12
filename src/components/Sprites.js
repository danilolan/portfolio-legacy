import player_run_1 from '../assets/sprites/player_run_1.png'
import player_run_2 from '../assets/sprites/player_run_2.png'

import player_idle_1 from '../assets/sprites/player_idle_1.png'
import player_idle_2 from '../assets/sprites/player_idle_2.png'


import player_run_1_flip from '../assets/sprites/player_run_1_flip.png'
import player_run_2_flip from '../assets/sprites/player_run_2_flip.png'

import player_idle_1_flip from '../assets/sprites/player_idle_1_flip.png'
import player_idle_2_flip from '../assets/sprites/player_idle_2_flip.png'

function Sprites() {
    return ( 
        <div style={{display: 'none'}}>
            <img src={player_run_1} alt="" id='player_run_1'/>
            <img src={player_run_2} alt="" id='player_run_2'/>

            <img src={player_idle_1} alt="" id='player_idle_1'/>
            <img src={player_idle_2} alt="" id='player_idle_2'/>


            <img src={player_run_1_flip} alt="" id='player_run_1_flip'/>
            <img src={player_run_2_flip} alt="" id='player_run_2_flip'/>

            <img src={player_idle_1_flip} alt="" id='player_idle_1_flip'/>
            <img src={player_idle_2_flip} alt="" id='player_idle_2_flip'/>
        </div>
     );
}

export default Sprites;