var vector, speed, razor, canvas;
function setup() {
var canvas = createCanvas(600, 600);
  noStroke();
  smooth();


razor = new Razor(90, 90, 160, 20)
razor2 = new Razor(180, 90, 160, 20)

rectMode(CENTER)
}

function draw(){
  background(0);
/*  if (green > value) {
   speed = speed * -1
  } else if (green < 0){
    speed = speed * -1
  }
  green = green + speed;

*/
razor.render()
razor.move()
razor2.render()
razor2.move()



}

function getRandomValue(a, b){

  var r = random(0,1)
  if(r > .5){
    return a
  } else{
    return b
  }
}


function Razor(x, y, w, h){
  this.v = createVector(x,y)
  this.w = w;
  this.h = h;
  this.angle = 0
  this.colors = {
    red:255,
    green:0,
    blue:0,
    alpha:255
  }

  this.move = function(){
    var seconds = (frameCount%60) 
    if(seconds == 5){
      this.angle = this.angle+=5 
    } else if(seconds == 10){
      this.angle = this.angle+=5       
    } else if(seconds == 20){
      this.angle = this.angle+=10       
    }
  if(this.angle > 360){
    this.angle = 0
  }
  console.log(razor.angle)
  }

  this.render = function(){
    push();
    fill(this.colors.red, this.colors.green, this.colors.blue, this.colors.alpha)
    translate(this.v.x, this.v.y);
    rotate(radians(this.angle));
    rect(0, 0, this.w, this.h);
    pop();   
  }
}

var flag = true;
function mousePressed(){
  flag = !flag
  !flag ? noLoop() : loop();
}