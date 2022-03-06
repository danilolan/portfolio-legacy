function keyHandler(x){
    console.log('entrou')
}

class player{
    constructor(myGameArea, width, height, color, x, y ){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color
        this.speedX = 0
        this.speedY = 0
        this.myGameArea = myGameArea


        document.addEventListener ('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'd'){
                this.speedX = 5
            }
            else if(keyName === 'a'){
                this.speedX = -5
            }
        }, false);

        document.addEventListener ('keyup', (event) => {
            const keyName = event.key;
            if(keyName === 'd'){
                this.speedX = 0
            }
            else if(keyName === 'a'){
                this.speedX = 0
            }
        }, false);
    }
    update(){
        let ctx = this.myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

export default player