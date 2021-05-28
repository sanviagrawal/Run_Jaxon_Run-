var path;
var pathImg;
function preload(){
  pathImg=loadImage(path.png)
  JaxonImg=loadAnimation("runner-1.png","runner-2.png")



  //pre-load images
}

function setup(){
  createCanvas(400,400);
  path= createSprite(200,200);
  path.addImg(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  Jaxon=createSprite(40,30,20,50)
  Jaxon.addAnimation("Jaxon_running",JaxonImg)
  InvisibleLeftWall=createSprite(380,200,20,400)
  InvisibleLeftWall.visible=false;
  InvisibleRighttWall=createSprite(20,200,20,400)
  InvisibleRighttWall.visible=false;
}

function draw() {
  background(0);
  Jaxon.x=World.mouseX;
  

  if (path.y>400){
    path.y=height/2
  }

}
