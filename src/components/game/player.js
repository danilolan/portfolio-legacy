class player{
    constructor(myGameArea, width, height, color, x, y, force){
        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;
        this.yAnt = y;
        this.xScenario = 0
        this.xScenarioAnt = this.xScenario;
        
        this.dimensions = {}

        

        this.color = color

        this.force = force
        this.accY = 1
        this.speedX = 0
        this.speedY = 0

        this.isGroundColiding = false
        this.jumpCharge = 0

        this.canMoveRight = true
        this.canMoveLeft = true

        this.myGameArea = myGameArea

        this.colliders = []


        //CONTROLES
        document.addEventListener ('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowRight'){
                if(this.canMoveRight)
                    this.speedX = this.force.x
            }
            if(keyName === 'ArrowLeft'){
                if(this.canMoveLeft)
                    this.speedX = -this.force.x
            }
            if(keyName === 'ArrowUp'){
                if(this.jumpCharge){
                    this.speedY = -20
                    this.y -= 1
                    this.isGroundColiding = false

                    this.jumpCharge -= 1
                }
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
        this.xScenarioAnt = this.xScenario
        this.yAnt = this.y
        this.dimensions = {
            myleft: this.x,
            myright: this.x + (this.width),
            mytop: this.y,
            mybottom: this.y + (this.height),
        }

        this.xAbs += this.speedX

        this.verifyJump()

        this.gravity() 

        this.xScenario -= this.speedX
        this.y += this.speedY

        this.colisions()
        console.log(this.xScenarioAnt, this.xScenario)

        let ctx = this.myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    gravity(){
        if(this.isGroundColiding)
            this.speedY = 0

        else if(this.speedY < 20){
            this.speedY += this.accY
        }
        
    }

    colisions(){
        if(this.dimensions.mybottom >= window.innerHeight){   
            this.y = window.innerHeight - this.height 
            this.isGroundColiding = true
        }
        else{
            this.isGroundColiding = false
        }

        //console.log('myright: ', this.dimensions.myright)
        //console.log('objright: ', this.colliders[0].myright)
        //console.log('myleft: ', this.dimensions.myleft)
        //console.log('objleft: ', this.colliders[0].myleft)

        //console.log(this.speedX)

        for(let i=0 ; i<this.colliders.length ; i++){
            if(
                this.dimensions.myright > this.colliders[i].myleft && this.dimensions.myleft < this.colliders[i].myright &&
                this.dimensions.mybottom > this.colliders[i].mytop && this.dimensions.mytop < this.colliders[i].mybottom
            ){
                console.log('colidiu')
                this.xScenario = this.xScenarioAnt
            }
            
        }
    }

    verifyJump(){
        if(this.isGroundColiding){
            this.jumpCharge = 2
        }
    }

    setColliders(colliders){
        this.colliders = colliders
    }
}

export default player