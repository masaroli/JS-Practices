var vector, speed, razor, canvas;
var razors = [];
function setup() {
var canvas = createCanvas(600, 600);
  noStroke();
  smooth();

for (var i = 100; i < width; i+=100) {
razors.push(new Razor(i, 0, 60, 20));   
}

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
for (var i = 0; i < razors.length; i++) {
razors[i].render();
razors[i].move() 
}


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
  this.switch = [true, false, false, true]

  this.move = function(){
    var seconds = (frameCount%30) 
    if(seconds == 5){
      this.angle = this.angle+=15 
    } else if(seconds == 10){
      this.angle = this.angle+=5       
    } else if(seconds == 20){
      this.angle = this.angle+=15       
    }
  if(this.angle > 360){
    this.angle = 0
  }

  if(this.angle == 90 || this.angle == 270) {
   this.switch[1] = !this.switch[1];
   if(this.switch[1]){ 
    this.colors.green = 255; 
  } else {
    this.colors.green = 0; 
  }
  console.log(this.switch[1])
  }

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