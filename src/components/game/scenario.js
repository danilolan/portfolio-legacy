import Object from './object'

class scenario{
    constructor(myGameArea, x, y, showCollider, getPos){
        this.x = x;
        this.y = y;

        this.speedX = 0

        this.objs = []
        this.objsColliders = []

        this.xAbs = 0

        this.showCollider = showCollider
        this.getPos = getPos
        this.myGameArea = myGameArea
    }

    start(){
        this.objs.push(new Object(this.myGameArea, 600, 50, 'green', 100, 600, this.showCollider))
        this.objs.push(new Object(this.myGameArea, 400, 50, 'green', 900, 900, this.showCollider))

        for(let i=0 ; i<this.objs.length ; i++){
            this.objsColliders.push(this.objs[i].getDimensions())
        }
    }

    update(){
        for(let i=0 ; i < this.objs.length ; i++){
            this.objs[i].setPos(this.x + this.objs[i].xInitial, this.y + this.objs[i].yInitial)
            this.objs[i].update()

            this.objsColliders[i] = this.objs[i].getDimensions()
        }     
        this.getPos(this.x)  
    }

    setX(x){
        this.x = x
    }

    getColliders(){
        return this.objsColliders
    }
}

export default scenario