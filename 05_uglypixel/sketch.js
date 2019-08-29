var cartesian, r, a, counter, shape1;
var shapes = []
function setup() {
  createCanvas(600, 600);
  
  angleMode(DEGREES)
  a = 90
  cartesian = new CreateCartisian(50, 20, 5);
  shape1 = new CreateShape(30, 90);
  shape2 = new CreateShape(30, 90)

}

function draw() {
  a+=0.5
    background(0);

  //cartesian.draw()

  push()
  translate(width/2, height)
  rotate(a)
  shape1.draw()
  pop()  
  push()
  translate(width/2, 0)
  rotate(a*-1)
  shape2.draw()
  pop()  
}

function CreateShape(numShapes, shape){
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.a = 0;
  this.numShapes = numShapes;
  this.shape = shape
  this.w = 1
  
  this.draw = function(){
    for(r = 0; r < width; r+=this.numShapes) {
     this.r = r
     var ccA = map(r, 0, 200, 0, 255);
     var ccG = map(r, 0, 200, 0, 125);
     var ccR = map(r, 0, 200, 0, 255);    
     stroke(ccR, ccG, 35, ccA);
     strokeWeight(this.w);
     noFill()
     beginShape();
      
      for(var i = 0; i < width; i+=this.shape = shape){
        this.a = i
        this.x = this.r * cos(this.a)
        this.y = this.r * sin(this.a)
        vertex(this.x, this.y)
      }
    endShape()

    }
  }
}


function CreateCartisian(acolor, units, uLength){
  this.color = acolor;
  this.units = units;
  this.l = uLength
  
  
  this.draw = function(){
    push();
    strokeWeight(1);
    stroke(this.color);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    
    for(var i = this.units; i < width; i+=this.units) {
      i != width/2 && line(i, height/2-this.l, i, height/2+this.l)
    }

    for(var i = this.units; i < height; i+=this.units) {
      i != height/2 && line(width/2-this.l, i, width/2+this.l, i)
    }
    pop();
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