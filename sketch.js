var fixedRect, movingRect,square1,square2,square3,square4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1=createSprite(200,600,60,60);
  square1.shapeColor = "green";
  square2=createSprite(800,600,40,40);
  square2.shapeColor = "green";
  square3=createSprite(300,300,70,70);
  square3.shapeColor = "green";
  square4=createSprite(1000,600,60,60);
  square4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,square3)){
  movingRect.shapeColor = "red";
  square3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    square3.shapeColor = "green";  
  }
 
  drawSprites();
}
function isTouching(square1,square2){
  if (square1.x - square2.x < square2.width/2 + square1.width/2
    && square2.x - square1.x < square2.width/2 + square1.width/2
    && square1.y - square2.y < square2.height/2 + square1.height/2
    && square2.y - square1.y < square2.height/2 + square1.height/2) {
 // movingRect.shapeColor = "red";
 // fixedRect.shapeColor = "red";
 return true;
}
else {
 // movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
  return false;
}

}