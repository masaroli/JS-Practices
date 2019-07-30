var vector, speed, razor, canvas;
var razors = [];
function setup() {
var canvas = createCanvas(600, 600);
  noStroke();
  smooth();
  var counter = 0;

  for (var i = 0; i < width+60; i+=20) {
    
    for(var j = 0; j < height+60 ; j+=20){
        razors.push(new Razor(i, j, 25, 5));   
    }
  }



rectMode(CENTER)
}

function draw(){
background(0);
stroke(255);
strokeWeight(4)
noFill()
arc(width/2, width/2, 300, 300, 0, PI*2);

/*for (var i = 0; i < razors.length; i++) {
razors[i].render();
razors[i].move()
}
*/

}

function getRandomValue(a, b){

  var r = random(0,1)
  if(r > .5){
    return a
  } else{
    return b
  }
}


function Razor(x, y, w, h, colors){
  this.v = createVector(x,y)
  this.w = w;
  this.h = h;
  this.angle = 0
  this.colors = {
    red:colors,
    green:random(0,50),
    blue:0,
    alpha:255
  }
  this.speed = 1;
  this.move = function(){
   

    this.angle = this.angle + this.speed

       if(this.angle > 80){
        this.speed = this.speed * -1
        this.angle = this.angle + this.speed
       } else if(this.angle < 0){
        this.speed = this.speed * -1
        this.angle = this.angle + this.speed        
       }

  
    /*
    if(seconds == 5){
        this.angle = this.angle+=90  
      } else if(seconds == 10){
        this.angle = this.angle+=90       
      } else if(seconds == 20){
        this.angle = this.angle+=90       
    }
    */
   // this.colors.alpha = map(this.angle, 0, 90, 0, 255)

 
    /* this.switch[1] = !this.switch[1];
     if(this.switch[1]){ 
      this.colors.blue = 255; 
      this.colors.red = 0; 

    } else {
      this.colors.blue = 0; 
      this.colors.red = 255; 
      }
      */

  }

  this.render = function(){
    push();
    fill(this.colors.red, this.colors.green, this.colors.red, this.colors.alpha)
    translate(this.v.x, this.v.y);
    rotate(radians(this.angle));
    rect(0, 0, this.w, this.h, 20);
    pop();   
  }
}

var flag = true;
function mousePressed(){
  flag = !flag
  !flag ? noLoop() : loop();
}