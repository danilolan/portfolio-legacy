import React, {useEffect} from 'react';

import Player from './player'

let myGamePiece
  
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

function startGame() {
    myGameArea.start();
    myGamePiece = new Player(myGameArea, 30, 30, "red", 10, 120, 10);
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
}

function Game(props) {
    useEffect(() => {
        startGame()
    }, []);

    return ( 
        <div>
            
        </div>
     );
}

export default Game;