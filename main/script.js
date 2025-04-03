let BG
let robot
let paddle_width = 80;
let paddle_height = 30;
var robolist = [];
var robotimer

class Robot {
    constructor() {
        this.X = 0
        this.Y = windowWidth / 3 / 2
        this.speedX = random(1,4)
        this.speedY = random(-2,-4)
        this.width = 60
        this.height = 60
        this.angle = 0
    }
    move(){
        this.X = this.X + this.speedX
        this.speedY=this.speedY+0.05;
        if (this.Y + this.height / 2 > windowWidth / 3 - 50) {
            if (this.X > mouseX - paddle_width / 2 && this.X < mouseX + paddle_width / 2){
            this.speedY = -abs(this.speedY)
            }
        }
        this.Y = this.Y + this.speedY
        image(robot, this.X, this.Y, 30, 30)
    }
}

function preload() {
    BG = loadImage("images/reaching-robot.svg")
    robot = loadImage("images/Android1.png")
}
function setup() {
    var canvas = createCanvas(windowWidth, windowWidth / 3);
    canvas.parent("robogame")
}
function draw() {
    background("white")
    image(BG, 0, 0, windowWidth, windowWidth / 3)
    create_paddle()
    robolist.forEach(function(robot, which){
        robot.move()
    })
}
function create_paddle() {
    fill("#3F0A4A")
    rect(mouseX - 40, windowWidth / 3 - 50, paddle_width, paddle_height, 20, 20, 0, 0)
}
function create_robots(){
    let new_robot = new Robot()
    robolist.unshift(new_robot)
    robotimer = setTimeout(create_robots, 2000)
}
function play(){
    robolist = []
    clearTimeout(robotimer)
    loop()
    create_robots()
}