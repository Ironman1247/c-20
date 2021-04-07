var movingRect
var fixedRect

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";

  fixedRect= createSprite(300,300,50,50);
  fixedRect.shapeColor="blue";
}

function draw() {
  background(0);  

  movingRect.x=mouseX
  movingRect.y=mouseY

  if((movingRect.x - fixedRect.x < (movingRect.width+ fixedRect.width)/2 )&&
  (fixedRect.x - movingRect.x < (movingRect.width+ fixedRect.width)/2) &&

  (movingRect.y - fixedRect.y< (movingRect.height+ fixedRect.height)/2 )&&
  (fixedRect.x - movingRect.y < (movingRect.height+ fixedRect.height)/2) ){

    movingRect.shapeColor="green";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}