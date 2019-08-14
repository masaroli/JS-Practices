var a, x, y, r, aAcc, aVel, v, xOff;
function setup() {
  var canvas = createCanvas(600, 600);
  r = 240;
  a = 0
  stroke(255,0,100,20)

  v = 0.0;
  noFill();
    background(0);

}

function draw(){
  translate(width/2, height/2)

  beginShape()
  for(var i = 5; i >= 0; i--) {

    a = i *v;

    x = sin(a) * r;
    y = cos(a)* r;
    vertex(x, y)
  }
  endShape()
    v+=0.9;
};


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