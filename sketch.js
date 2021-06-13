var canvas,bgImg,tomImg1,tomImg2,tomImg3,jarryImg1,jarryImg2,jarryImg3

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadImage("images/cat4.png");
    jarryImg1 = loadImage("images/mouse1.png");
    jarryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jarryImg3 = loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    background(bgImg);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addAnimation("tomSlepping",tomImg1);
tom.scale = 0.2;

jarry = createSprite(200,600);
jarry.addAnimation("jarryStanding",jarryImg1);
tom.scale = 0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 if(tom.x - jarry.x <(tom.width - jarry.width)/2)
 {tom.velocityX = 0 ;
tom.addAnimation("tomlastImg",tomImg3);
tom.x = 300 ;
tom.scale = 0.2
tom.changeAnimation("tomlastImg");
jarry.addAnimation("jarrylastImg",jarryImg3);
jarry.scale = 0.15
jarry.changeAnimation("jarrylastImg");


 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW)
{
    tom.velocityX = -5 
    tom.addAnimation("tomrunning",tomImg2);
    tom.changeAnimation("tomrunning");
    jarry.addAnimation("jarryteasing",jarryImg2);
    jarry.frameDelay = 25;
jarry.changeAnimation("jarryteasing");

}

}
