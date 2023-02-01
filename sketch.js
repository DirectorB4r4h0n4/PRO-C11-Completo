var sea, seaImage;
var RMSConcorde ,ship_moving;

function preload(){
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200, 400, 300); 
  sea.addImage("sea.png", seaImage);

  RMSConcorde = createSprite(200, 200, 50, 50);
  RMSConcorde.addAnimation("floating", ship_moving);
  RMSConcorde.scale = 0.4;
}

function draw() {
  background("blue");
  sea.velocityX = -2
  console.log(sea.x)

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
 drawSprites();
}