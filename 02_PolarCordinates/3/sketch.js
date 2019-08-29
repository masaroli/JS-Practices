var a, x, y, r, aAcc, aVel, cartesian, spiral;

var counter = 0
var spiral = 0

function setup() {
  var canvas = createCanvas(600, 600, SVG);
  angleMode(DEGREES)
  a = 0;
  aAcc = .02;
  aVel = 0.2;
  cartesian = new CartisianPlane(30, 'gray', 10)
  r = 160

}

function draw(){
 background(0);

 //cartesian.draw()
  push()
  translate(width/2, height/2)
 
  stroke(0);
  

       
    for(var i = 0; i < width; i+=.5) {
      r = i
        a = map(i, 0, width*.2, 0, 360)
        x = r * cos(a); 
        y = r * sin(a);
        var ccR = map(i, 0, width, 30, 205)
        var ccG = map(i, 0, width, 40, 180)
        var ccB = map(i, 0, width, 20, 80)
        noStroke()
        fill(ccR, ccG, ccB, 255)
        ellipse(x, y, r*.5)

    }
 
  pop()
  save("mySVG.svg");      // give file name
  print ("saved svg");
  noLoop(); 
};


function CartisianPlane(units, color, lineDiam){
  this.units = units;
  this.color = color;
  this.l = lineDiam

  this.draw = function(){
    push()
    translate(width/2, height/2)

    stroke(this.color)
    line(-width/2, 0, width, 0)
    line(0, -width/2, 0, height)
    pop()

    for(var i = 0; i < width; i+=this.units) {
      stroke(this.color)
      line(i, height/2-this.l, i, height/2+this.l)
    }
    for(var i = 0; i < height; i+=this.units) {
      stroke(this.color)
      line(width/2-this.l, i, width/2+this.l, i)
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