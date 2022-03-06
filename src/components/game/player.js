function keyHandler(x){
    console.log('entrou')
}

class player{
    constructor(myGameArea, getPos, width, height, color, x, y, force ){
        this.getPos = getPos

        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;
        this.xAnt = x;
        this.yAnt = y;
        this.dimensions = {}

        this.color = color

        this.force = force
        this.accY = 1
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
            else if(keyName === 'ArrowUp'){
                console.log(keyName)
                this.speedY = -20
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
        this.xAnt = this.x
        this.yAnt = this.y
        this.dimensions = {
            myleft: this.x,
            myright: this.x + (this.width),
            mytop: this.y,
            mybottom: this.y + (this.height),
        }

        let ctx = this.myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        this.gravity()        
        
        this.x += this.speedX;
        this.y += this.speedY

        this.colisions()
        
        this.getPos(this.x)
    }

    gravity(){
        if(this.speedY < 20){
            this.speedY += this.accY
        }           
    }
    colisions(){
        if(this.dimensions.mybottom > window.innerHeight){
            this.y = this.yAnt
        }
    }
}

export default player