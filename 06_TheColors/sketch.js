var lines = [];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);


  for(var i = 0; i < 100; i++) {
    if(i%2){
      lines[i] = new Shape('box', 0, 0, 60)
    } else{
      lines[i] = new Shape('rect', 0, 0, 60)
    }
  }


}

function draw() {
    background(220);

  translate(width/2, height/2)
  for(var i = 0; i < lines.length; i++) {
      if(i % 2){
      lines[i].w += (i*10)
      lines[i].draw()
       } else{
          lines[i].w += (i*10)
          lines[i].draw()     
       }
  } 
  console.log(lines)
  noLoop()
}

class Shape {
  constructor(form, x, y, w) {

    this.x = x;
  this.y = y;
  this.form =  form == 'box' ? true : false
  this.w = w;
    this.speed = 1
    this.acc = 1
    this.a = 45

  }   
  move(){
    this.acc+=1
    this.a = this.speed + this.acc

  }
  draw(){

    if(this.form){
  
        push()
        rectMode(CENTER)
        translate(this.x, this.y)
        rotate(this.a)
    
      stroke(255)   
        noFill()
      //fill(234, 79, 180)
      rect(0, 0, this.w, this.w)
      pop()
    } else {
      push()
        translate(this.x, this.y)
        rectMode(CENTER)

      stroke(255)
        noFill()
      //fill(143, 123, 240)
      rect(0, 0, this.w, this.w*2)
        pop()
    }
  }
  
}


function make2DArray (cols, rows){
  var arr = new Array(cols)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr
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