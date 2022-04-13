
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var  mario;

var road;

var b1,b2,b3,b4;

var GMOR;
var RB;
var bgm,gameover,checkpoint,jump;

var score
function preload(){
  marioImage = loadAnimation("mario.gif");

  
  roadImage = loadAnimation("road.gif");

  b1 = loadAnimation("b1.gif");
  b2 = loadAnimation("b2.gif");
  b3 = loadAnimation("b3.gif");
  b4 = loadAnimation("b4.gif");

  GMORImage = loadAnimation("GMOR.gif");
  RBImagr = loadImage("RB.png");


  jumpSound = loadSound("jump.mp3")
  gameoverSound = loadSound("gameover.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  bgmSound = loadSound("bgm.mp3")

  

  

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  road = createSprite(300,180,);
  road.addAnimation("road.gif",roadImage);



  mario = createSprite(100,285,20,50);
  mario.addAnimation("mario",marioImage);
  mario.scale = 0.6
  

  GMOR = createSprite(300,100);
  GMOR.addAnimation("GMOR",GMORImg);
  
 RB = createSprite(300,140);
  RB.addImage("RB",RBImagr);
  
 
  GMOR.scale = 0.5;
  RB.scale = 0.5;
  
  bGroup = createGroup();
 
  
  
 

  
}

function draw() {
  
  
  background(180);
  //displaying score
  text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){

    GMOR.visible = false;
    RB.visible = false;
    
    
    
    
    
    
    
    //jump when the space key is pressed
    if(keyDown("space")&& mario.y >= 100) {
        mario.velocityY = -9;
        jumpSound.play();
    }
    
    //add gravity
    mario.velocityY = mario.velocityY + 0.5
  
    
    spawnb();
    
    if(bGroup.isTouching(mario)){
       
        jumpSound.play();
        gameState = END;
        RB.play()
      
    }
  }
   else if (gameState === END) {
      RB.visible = true;
      RB.visible = true;
     
     
    
     
     
     
      
     
      //set lifetime of the game objects so that they are never destroyed
      bGroup.setLifetimeEach(-1);
   
     
     bGroup.setVelocityXEach(0);
      
   }
  
 
  
  
  if(mousePressedOver(RB)) {
      reset();
    }



}

function reset(){
  gameState = PLAY
  bGroup.destroyEach()
 
  
  score = 0
  

}


function spawnb(){
 if (frameCount % 60 === 0){
   var b = createSprite(600,165,10,40);
  b.velocityX = -(6 + score/100);
   
   
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: b.addAnimation(b1);
              break;
      case 2: b.addAnimation(b2);
              break;
      case 3: b.addAnimation(b3);
              break;
      case 4: b.addAnimation(b4);
              break;
     
      default: break;
    }
   
             
    b.scale = 0.5;
    b.lifetime = 300;
   
   
    bGroup.add(b);
 }

  
 


  
  

  drawSprites();
}




