class Food{
    constructor() {
        this.position = getRandomPosition() 
    }   

    draw(){
        ctx.fillStyle = FOOD_COLOR
        ctx.fillRect(this.position.x, this.position.y,CELL_SIZE,CELL_SIZE)        
    }

    update(){
        this.draw()
    }

    changePosition(){
        this.position = getRandomPosition() 
    }
}
