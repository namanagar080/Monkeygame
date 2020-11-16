
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  background("green");
  if(keyDown("space")&& monkey.y >= 100) {
         monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(getFrameRate%80===0){
    survivalTime=survivalTime+2;
  }
  food();
  obstacles();
  
  drawSprites();
}

 function food(){
  if (frameCount%80===0){
     banana=createSprite(600,200,20,20);
    banana.addImage(bananaImage);
    banana.y=random(120,200);
    banana.velocityX=-4;
    banana.lifetime=-600;
    FoodGroup.add(banana);
  }
 }

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,200,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.y=random(120,200);
    obstacle.velocityX=-4;
    obstacle.lifetime=-600;
    obstaclesGroup.add(obstacle);
  }
}
