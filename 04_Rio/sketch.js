var l, v, currentV, rotAngle, r, a, y, x, xOff;


var vR = []

function setup() {
  createCanvas(600, 600);
  r = 1200;
  a = 0;
  v = new RandomCircle();
  for(var i = 0; i < 5; i++){
    vR[i] = new RandomCircle();
    
  }


frameRate(2)
}

function draw() {
  background(0)

  push() 
  a++
  translate(width/2, height/2)

  for(var i = 0; i < r; i++){
    x = cos(a) * i;
    y = sin(a) * i;
    fill(255, 255, 255, 255-i)

    noStroke()
    ellipse(x, y, i*.15)  
      rotate(a)
    }

  pop()

}


function RandomCircle(){
  
  this.x = random(0, width);
  this.y = random(0, height);
  this.r = 5;
  var vectors = [];
  


  
  this.show = function(){  
   for(var i = 0; i < 5; i++) {
    fill(255);
    ellipse(this.x, this.y, this.r)
    }
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

var flag = true;
function mousePressed(){
  flag = !flag
  !flag ? noLoop() : loop();
}