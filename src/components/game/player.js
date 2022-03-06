function keyHandler(x){
    console.log('entrou')
}

class player{
    constructor(myGameArea, width, height, color, x, y, force ){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color

        this.force = force
        this.speedX = 0
        this.speedY = 0

        this.myGameArea = myGameArea


        //CONTROLES
        document.addEventListener ('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowRight'){
                this.speedX = this.force.x
            }
            else if(keyName === 'ArrowLeft'){
                this.speedX = -this.force.x
            }
        }, false);

        document.addEventListener ('keyup', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowRight'){
                this.speedX = 0
            }
            else if(keyName === 'ArrowLeft'){
                this.speedX = 0
            }
        }, false);
    }

    update(){
        let ctx = this.myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        this.x += this.speedX;
        this.gravity()
    }

    gravity(){
        
    }
}

export default player