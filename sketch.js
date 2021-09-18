var shipAnimation, ship
var seaAnimation, sea

function preload(){
shipAnimation = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png');
seaImage = loadImage('sea.png');

}

function setup(){
  createCanvas(400,400);
  
  //create sea sprite
  sea = createSprite(200,200,400,100);
  sea.addImage('sea',seaImage);
  sea.scale = 0.3;

  //create ship sprite
  ship = createSprite(200,200,20,20);
  ship.addAnimation('ship',shipAnimation);
  ship.scale = 0.25;
  
}

function draw() {
  background("blue");
  
  
  sea.velocityX = -2;
  
  if(sea.x<0){
    sea.x=200;
  }
  
  
  drawSprites();
 
}