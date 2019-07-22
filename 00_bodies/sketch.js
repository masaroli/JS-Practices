// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, circles, world, grounds;


function setup() {
  createCanvas(600, 600);
  
  engine = Engine.create();
  world = engine.world;
  circles = [];
  Engine.run(engine);
  var options = {
    isStatic: true
  }
  grounds = [];
 /* grounds.push(new Boundary(450, 160, 250, 10, -0.25));
  grounds.push(new Boundary(180, 220, 350, 10, 0.25));  
  grounds.push(new Boundary(450, 320, 250, 10, -0.25));
  grounds.push(new Boundary(180, 350, 350, 10, 0.25));
  grounds.push(new Boundary(450, 410, 250, 10, -0.25));
*/
  for(var i = 0; i < 13; i++) {

    if(i%2) { 
    grounds[i] = (new Boundary(450, (i+1)*40, 310, 10, -0.25));

    } else {
    grounds[i] = (new Boundary(150, (i+1)*40, 310, 10, 0.25));
    } 

  }
    grounds.push(new Boundary(450, 546, 310, 10, -0.25));
      console.log(grounds)


}

function draw(){
  background(0);
  if(random(0,1) > .86){
  radio = random(2, 10)
  circles.push(new Circle(random(width), 0, radio))
  }
  for (var i = 0; i < circles.length; i++) {
    circles[i].show()
    if(circles[i].isOffScreen()){
      circles[i].removeFromWorld()
      circles.splice(i, 1)

      i--;
    }
  };

  for (var i = 0; i < grounds.length; i++) {
    grounds[i].show()
    }
  };

 function Boundary(x, y, w, h, a){
  this.w = w;
  this.h = h;
  this.angle = a;
  var options = {
    friction: 0,
    restitution: 1,
    isStatic: true,
    angle: a,
  }
  this.body = Bodies.rectangle(x, y, w, h, options);

  World.add(world, this.body);


  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    fill(255);
    rotate(this.angle)
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }


 }

function Box(x, y, w, h) {
  this.w = w;
  this.h = h;

  var options = {
    friction: 0,
    restitution: 0
  }
  this.body = Bodies.rectangle(x, y, w, h, options);

  World.add(world, this.body);


  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255)
    rect(0, 0, this.w, this.h);
    pop();
  }

}


function Circle(x, y, r) {
  this.r = r;

  var options = {
    friction: 0,
    restitution: .7,
  }
  this.body = Bodies.circle(x, y, r, options);

  World.add(world, this.body);

  this.isOffScreen = function() {
    var pos = this.body.position;
    return (pos.y > height + 100);
  }

  this.removeFromWorld = function(){
    World.remove(world, this.body);
  }

  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    fill(255)
    ellipse(0, 0, this.r*2);
    pop();
  }

}