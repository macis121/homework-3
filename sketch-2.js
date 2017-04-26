Week 3
sketch 2

function setup() { 
  createCanvas(400, 400);
   
} 

function draw() {
 background (255);
  
  
  var a = 0;
      var b = 0;
  while (a<400, b<400){
    noFill();
    
  ellipse(200, 200, a, b);
    
    a=a+15;
    b=b+15;
    
  }
  
}
