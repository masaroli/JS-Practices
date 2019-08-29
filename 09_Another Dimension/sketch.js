var body, x, y, r, a;

var bodies = [];

function setup() {
  angleMode(DEGREES)
  createCanvas(600, 600);
  body = new M();
  r = 100
  a = 0
  
  for(var i = 0; i < 16; i++){
  x = r * cos(a)
  y = r * sin(a)
  bodies.push(new M(x, y))
  a+=45
  }
}

function draw() {
  background(0, 0, 0);
  noFill();
  push()
  translate(width/2, height/2)
  rotate(frameCount/2)
  beginShape()
  for(var i = 0; i < bodies.length; i++){
  bodies[i].render();
  bodies[i].move()

  }
  endShape(CLOSE);
  ellipse(0,0,5)
  pop()

}


class M {
  constructor(x,y){
    this.loc = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.color = random(255)
    this.grav = createVector(0, 0)
  }
  
  move(){
  this.grav.sub(this.loc);
  this.grav.setMag(0.10)
  this.acc = this.grav   
    
  this.vel.add(this.acc);
  this.loc.add(this.vel);
    
  }
  
  render(){
    stroke(255, 200, 30, this.color)
    strokeWeight(1)
    ellipse(this.loc.x, this.loc.y, 10)

    
  }
}