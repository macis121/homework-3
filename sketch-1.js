function setup() { 
  createCanvas(400, 400);
  background (220);
} 

function draw (){
  background (220);
  
  
  var x= 0
  var y= 0
  while(x<400){
    line(x, 400,mouseX,mouseY);
    x=x+10;
    

}


}
