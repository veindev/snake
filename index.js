
const WIDTH_SIZE = 600
const CELL_SIZE = 20

const BACKGROUND_COLOR = 'black'
const SNAKE_COLOR = 'white'
const FOOD_COLOR = 'red'
const GRID_COLOR = 'gray'
const UP_ARROW = 'ArrowUp'
const DOWN_ARROW = 'ArrowDown'
const LEFT_ARROW = 'ArrowLeft'
const RIGHT_ARROW = 'ArrowRight'
const SPACE_BUTTON = ' '

const SPACE = 32
const UP = new Vector2(0,-1)
const DOWN = new Vector2(0,1)
const LEFT = new Vector2(-1,0)
const RIGHT = new Vector2(1,0)

// Init Game
const canvas = document.getElementById('canvas')
const text = document.getElementById('text')
canvas.width = canvas.height = WIDTH_SIZE
var ctx = canvas.getContext('2d')
ctx.fillStyle = BACKGROUND_COLOR
ctx.fillRect(0, 0, WIDTH_SIZE, WIDTH_SIZE)

function drawLine(a, b){
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}

function drawGrid(){
    ctx.fillStyle = GRID_COLOR;
    // Draw Rows
    for(let i =0;i<= WIDTH_SIZE - CELL_SIZE; i+= CELL_SIZE){
        drawLine({x: 0, y: i}, {x: WIDTH_SIZE, y: i})
    }

    for(let i =0;i<= WIDTH_SIZE - CELL_SIZE; i+= CELL_SIZE){
        drawLine({x: i, y: 0}, {x: i, y: WIDTH_SIZE})
    }
}

drawGrid()
var score = 0
text.innerText= `Score: ${score}`;
var playerSnake = new Snake()
var food = new Food()
playerSnake.draw()
food.draw()
let lastKeyInput = RIGHT_ARROW

function handleEat(){
    if(food.position.x == playerSnake.body[0].x  && food.position.y == playerSnake.body[0].y){
        playerSnake.addTail();
        food.changePosition();
        score ++; 
        text.innerText= `Score: ${score}`;
    }
}

function checkLose(){
    for(let i = 1; i< playerSnake.body.length; i++){
        if(playerSnake.body[0].x == playerSnake.body[i].x &&
            playerSnake.body[0].y == playerSnake.body[i].y){
                text.innerText= `YOU LOSE, Press space to play again`;
                clearInterval(gameInterval);
            }
    }
}

var gameInterval = setInterval(()=>{
    playerSnake.update()
    food.update()
    handleEat()
    checkLose()
    drawGrid()
}, 100)

// Keyboard Input
document.onkeydown = e =>{
    console.log(e.key)
    switch (e.key) {
        case UP_ARROW:
            if(lastKeyInput == DOWN_ARROW) break;
            playerSnake.direction = UP
            lastKeyInput = UP_ARROW
            break;

        case DOWN_ARROW:
            if(lastKeyInput == UP_ARROW) break;
            playerSnake.direction = DOWN
            lastKeyInput = DOWN_ARROW
            break;

        case LEFT_ARROW:
            if(lastKeyInput == RIGHT_ARROW) break;
            playerSnake.direction = LEFT
            lastKeyInput = LEFT_ARROW
            break;

        case RIGHT_ARROW:
            if(lastKeyInput == LEFT_ARROW) break;
            playerSnake.direction = RIGHT
            lastKeyInput = RIGHT_ARROW
            break;    

        case " ":
            location.reload();
    }
}

