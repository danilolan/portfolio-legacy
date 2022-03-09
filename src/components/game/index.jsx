import React, {useEffect} from 'react';

import Player from './player'
import Scenario from './scenario'

let player
let scenario 
  
let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function startGame(getPos) {
    myGameArea.start();
    player = new Player(myGameArea, 30, 30, "red", ((window.innerWidth / 2) - 100) , 125, {x: 10, y: 10});
    scenario = new Scenario(myGameArea, 0, 0, true, getPos)  
    scenario.start()
}

function updateGameArea() {
    myGameArea.clear();
    scenario.setPos(player.speedX)
    scenario.update();
    player.update();
}

function Game(props) {
    useEffect(() => {
        startGame(props.getPos)
    }, []);

    return ( 
        <div>
            
        </div>
     );
}

export default Game;