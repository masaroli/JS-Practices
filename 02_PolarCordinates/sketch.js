var r, a, aVel, aAcc;
function setup() {
var canvas = createCanvas(600, 600);
r = 100;
a = 0.0;
aVel = 0.00;
aAcc = 1; 
background(0)

}

function draw(){
var x = r * cos(a);
var y = r * sin(a);

translate(width/2, height/2);
noFill();
stroke(255);


  line(0,0, x, y);
  ellipse(0,0, 50, 50);
  ellipse(x, y, 20, 20); 




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