var arr = make2DArray(20, 20)
var cols, rows, x, y, r, g, b, a, sum;
function setup() {
  createCanvas(600, 600);

  rows = 20
  textSize(rows)
  frameRate(2)
sum = 0;
}

function draw() {
  background(0);
  translate(100, 100)
  fill(255)
  for (var i = 0; i < arr.length; i++) {
     for(var j = 0; j < arr[i].length; j++){
      y = i * 20;
      x = j * 20;

      var bitNumber = Math.round(random(0,1))

      arr[i][j] = new BitNumber(x, y)
      arr[i][j].show()
      sum+=arr[i][j].bitValue
        if(sum > 200){
          background(200)
        } else{
          background(0)
        }
      sum = 0
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