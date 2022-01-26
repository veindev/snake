
function getRandomPosition(){
    let x = Math.floor(Math.random() * WIDTH_SIZE)
    let y = Math.floor(Math.random() * WIDTH_SIZE)

    if (x % CELL_SIZE !== 0) {
        x -= x % CELL_SIZE
    }

    if (y % CELL_SIZE !== 0) {
        y -= y % CELL_SIZE
    }

    return new Vector2(x,y);
}

class Food{
    constructor() {
        this.position = getRandomPosition() 
    }   

    draw(){
        // clearScreen()
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
