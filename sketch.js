var fixedRect,movingRect;
function setup(){
  createCanvas(800,400);
  fixedRect=createSprite(260,134,60,130);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(230,50,150,25);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}
function draw(){
  background(0);
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
  
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }
  drawSprites();
}