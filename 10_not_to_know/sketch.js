var arr = make2DArray(20, 20)
var cols, rows, x, y, r, g, b, a, c, sum;
function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  rows = 40
  textSize(rows-10)
  frameRate(2)
  textFont('Share Tech Mono')

    for (var i = 0; i < arr.length; i++) {
     for(var j = 0; j < arr[i].length; j++){
      y = i * rows;
      x = j * rows;

      var bitNumber = Math.round(random(0,1))

      arr[i][j] = new BitNumber(x, y)
     }
   }

   c = {
    prim: [234,55,136],
    sec: [63,99,174]
  }
}

function draw() {
  sum = 0;
    for (var i = 0; i < arr.length; i++) {
     for(var j = 0; j < arr[i].length; j++){
      sum+=arr[i][j].bitValue
     }
   } 
  background(255,200,54);

   if(sum > 200){
      fill(c.prim[0],c.prim[1],c.prim[2])
   } else{
      fill(c.sec[0],c.sec[1],c.sec[2])
   }
 
    for (var i = 0; i < arr.length; i++) {
     for(var j = 0; j < arr[i].length; j++){
      y = i * 20;
      x = j * 20;

      arr[i][j].show()
      arr[i][j].update()

     }
   } 

}

class BitNumber{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.bitValue = Math.round(random(0, 1));
    this.sum = [];

  }
  update(){
        this.bitValue = Math.round(random(0, 1));
  }
  show(){
    text(this.bitValue, this.x, this.y)
  }
}

function make2DArray (cols, rows){
  var arr = new Array(cols)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr
}