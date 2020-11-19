var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=5;
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=-5;
  movingRect.debug = true;

  gameObject1=createSprite(100,400,50,50)
  gameObject1.velocityX=5;
  gameObject2=createSprite(800,400,50,50)
  gameObject2.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  

  bounceOff(movingRect,fixedRect);
  bounceOff(gameObject1,gameObject2);
  drawSprites();
}

