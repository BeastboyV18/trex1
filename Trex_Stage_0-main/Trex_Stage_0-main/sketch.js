
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("Beast",trex_running)
}
function draw(){
  background("blue")
  
drawSprites();
}
