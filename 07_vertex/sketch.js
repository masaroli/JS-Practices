var blocks = []

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
  block = new BlockOfLines(0,0)

  for(var i = 0; i < 10; i++) {
    var x = i * 40
    blocks.push(new BlockOfLines(x, 0))

  }

}

function draw() {
background(50);

translate(width/2, height/2)
  for(var i = 0; i < 10; i++) {

    blocks[i].drawHoriz()
    blocks[i].update()
  }


}

class BlockOfLines {
  constructor(x, y) {
    this.location = createVector(x, y)
    this.blockSize = 200
    this.lineAmount = 9
    this.lineHoriz = createVector(this.blockSize, this.blockSize)
    this.lineVert = createVector(this.blockSize, this.blockSize)
  }   
  update(){
   this.lineAmount += random(-1,1) 

  }

  drawHoriz(){
      push()
      translate(this.location.x, this.location.y)
      stroke(255)     
      for(var i = 0; i <= this.blockSize; i+=this.blockSize/this.lineAmount) {
      this.lineHoriz.x = i  

      line(this.lineHoriz.x - this.blockSize/2, this.lineVert.y - this.blockSize/2, this.lineHoriz.x - this.blockSize/2, -this.blockSize/2)
      }

      pop()
    
  }

  drawVert(){
      push()
      translate(this.location.x, this.location.y)
      stroke(255)     
      for(var i = 0; i <= this.blockSize; i+=this.blockSize/this.lineAmount) {
      this.lineVert.y = i  
      line(this.lineVert.x - this.blockSize/2, this.lineVert.y - this.blockSize/2, -this.blockSize/2, this.lineVert.y - this.blockSize/2)
      }

      pop()
    
  }
  
}

function make2DArray (cols, rows){
  var arr = new Array(cols)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr
}