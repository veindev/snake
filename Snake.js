class Snake {
    constructor() {
        this.body = [
            new Vector2(WIDTH_SIZE/2, WIDTH_SIZE/2), // Head
            new Vector2(WIDTH_SIZE/2 - CELL_SIZE, WIDTH_SIZE/2),
            new Vector2(WIDTH_SIZE/2 - CELL_SIZE*2, WIDTH_SIZE/2),
        ]
        this.direction = RIGHT
    }

    draw(){
        ctx.fillStyle = SNAKE_COLOR
        for(let position of this.body){
            ctx.fillRect(position.x, position.y,CELL_SIZE,CELL_SIZE)
        }
    }

    handleBound(){
        if(this.body[0].x > WIDTH_SIZE - CELL_SIZE){
            this.body[0].x = 0;
        }
        if(this.body[0].x < 0){
            this.body[0].x = WIDTH_SIZE - CELL_SIZE;
        }


        if(this.body[0].y > WIDTH_SIZE - CELL_SIZE){
            this.body[0].y = 0;
        }

        if(this.body[0].y < 0){
            this.body[0].y = WIDTH_SIZE - CELL_SIZE;
        }
    }

    move(){
        let oldHead = {...this.body[0]}
        this.body[0].x += this.direction.x * CELL_SIZE;
        this.body[0].y += this.direction.y * CELL_SIZE;
        for(let i = this.body.length - 1; i >= 2; i-- ){
            this.body[i] = this.body[i-1]
        }
        this.body[1] = oldHead;
        this.handleBound();
    }

    addTail(){
        this.body.push({...this.body.slice(-1)})
    }
    
    update(){
        this.move()
        this.draw()
    }
}
