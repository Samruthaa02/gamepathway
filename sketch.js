var pathway,boy,coin,diamonds,jwell,sword;
var pathwayImg,boyImg,coinImg,diamondsImg,jwellImg,swordImg;
var score = 0;
var coinGrp,diamondsGrp,jwellGrp,swordGrp;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){

pathwayImg=loadImage("pathway.png");
boyImg=loadAnimation("Runner-1.png","Runner-2.png");
coinImg=loadImage("coin.png");
diamondsImg = loadImage("diamonds.png");
jwellImg = loadImage("jwell.png");
swordImg = loadImage("sword.png");
endImg =loadAnimation("gameOver.png");

}

function setup() {
  //createCanvas(windowWidth,windowHeight);

pathway=createSprite(width/2,height/2);
pathway.addImage(pathwayImg);
pathway.velocityY = 4;
pathway.scale=1;
 
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("Running",boyImg);
boy.scale=0.08;

coinGrp=new Group();
//diamondsGrp=new Group();
//jwellGrp=new Group();
swordGrp=new Group();

}

function draw() {
    if(gameState===PLAY){
       // background(0);
        boy.x = World.mouseX;
        
        edges= createEdgeSprites();
        boy.collide(edges);
        
        //code to reset the background
        if(pathway.y > height){
          pathway.y = height/2;
        }
        
          createcoin();
         // createDiamonds();
          //createJwell();
          createSword();
      
          if (coinGrp.isTouching(boy)) {
            console.log("PLAY");
            coinGrp.destroyEach();
            score=score+50;
            console.log(score);
            
          }
          else{
            if(swordGrp.isTouching(boy)) {
              gameState=END;
             
              boy.addImage("EndRunning",endImg);
              boy.x=width/2;
              boy.y=height/2;
              boy.scale=0.9;

            
              
              coinGrp.destroyEach();
              swordGrp.destroyEach();
              
              coinGrp.setVelocityYEach(0);
              swordGrp.setVelocityYEach(0);
           
          }
        }
        
        drawSprites();
        textSize(20);
        fill("black");
        text("SCORE: "+ score,150,30);
        }
      
      

 
}

function createcoin() {
    if (World.frameCount % 200 == 0) {
    var coin = createSprite(Math.round(random(50, pathway.width-50),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale=0.12;
    coin.velocityY = 3;
    coin.lifetime = 350;
    coinGrp.add(coin);
    }
  }

  function createSword(){
    if (World.frameCount % 530 == 0) {
    var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 350;
    swordGrp.add(sword);
    }
  }