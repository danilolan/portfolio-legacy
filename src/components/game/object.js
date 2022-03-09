class object{
    constructor(myGameArea, width, height, color, x, y, showCollider){
        this.width = width;
        this.height = height;

        this.xInitial = x;
        this.yInitial = y;

        this.x = x;
        this.y = y;

        this.speedX = 0

        this.dimensions = {
            myleft: this.x,
            myright: this.x + (this.width),
            mytop: this.y,
            mybottom: this.y + (this.height),
        }

        this.color = color

        this.showCollider = showCollider
        this.myGameArea = myGameArea
    }

    update(){
        this.dimensions = {
            myleft: this.x,
            myright: this.x + (this.width),
            mytop: this.y,
            mybottom: this.y + (this.height),
        }

        this.render()
    }

    render(){
        if(this.showCollider){
            let ctx = this.myGameArea.context;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);      
        }
    }

    setPos(x, y){
        this.x = x
        this.y = y
    }

    getDimensions(){
        return this.dimensions
    }
}

export default object