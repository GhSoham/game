var backgrounds;
var player,playerImg1,playerImg2;
var bullet,bulletR,bulletL;
var dir = 1;

function preload() {
backgrounds = loadImage("./assets/background.png")
playerImg1 = loadImage("./assets/soldier.png")
playerImg2 = loadImage("./assets/soldier2.png")
bulletR = loadImage("./assets/bulletR.png")
bulletL = loadImage("./assets/bulletL.png")



}

function setup() {
  createCanvas(1200,800);
  
  player = createSprite(600,650)
  player.addImage("player1",playerImg1)
  player.addImage("player2",playerImg2)

  bullet = createSprite(500,500)
  bullet.addImage("bullet1",bulletR)
  bullet.addImage("bullet2",bulletL)
  bullet.scale = 0.3
  bullet.velocityX = 0











}
   
function draw() {
 background(backgrounds);

 if(keyDown(RIGHT_ARROW)){
  player.changeImage("player2")
  bullet.changeImage("bullet1")
  dir = 1
 }

 if(keyDown(LEFT_ARROW)){
  player.changeImage("player1")
  bullet.changeImage("bullet2")
  dir = 2
 }

 if(keyDown('space')){
  if(dir===1){
    console.log("hello")
    bullet.velocityX = -1
    console.log("hello1")
  }
  else{
    bullet.velocityX = 1
  }
 }


 
 drawSprites();
}
