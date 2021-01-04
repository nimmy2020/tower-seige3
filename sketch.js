const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1,block2;
var rope;
var backgroundImg = "images/light.jpg"

function preload(){
  //  polygonImg=loadImage("polygon.png");
  getBackgroundImage();
  console.log("inside preload")
}

function setup(){

    engine = Engine.create();
    world=engine.world;

    createCanvas(1200,600);

    ground=new Ground(600,570,1200,20);
    stand1=new Ground(500,450,300,10);
    stand2=new Ground(900,250,300,10);

    
    fblock1=new Block(400,425,30,40);
    fblock2=new Block(430,425,30,40)
    fblock3=new Block(460,425,30,40)
    fblock4=new Block(490,425,30,40);
    fblock5=new Block(520,425,30,40);
    fblock6=new Block(550,425,30,40);
    fblock7=new Block(580,425,30,40);

    fblock11=new Block(430,385,30,40);
    fblock12=new Block(460,385,30,40)
    fblock13=new Block(490,385,30,40)
    fblock14=new Block(520,385,30,40);
    fblock15=new Block(550,385,30,40);

    
    fblock21=new Block(460,345,30,40);
    fblock22=new Block(490,345,30,40)
    fblock23=new Block(520,345,30,40)


    fblock31=new Block(490,305,30,40);

    //second tower

    sblock1=new Block(800,225,30,40);
    sblock2=new Block(830,225,30,40)
    sblock3=new Block(860,225,30,40)
    sblock4=new Block(890,225,30,40);
    sblock5=new Block(920,225,30,40);
    sblock6=new Block(950,225,30,40);
    sblock7=new Block(980,225,30,40);

    sblock11=new Block(830,185,30,40);
    sblock12=new Block(860,185,30,40)
    sblock13=new Block(890,185,30,40)
    sblock14=new Block(920,185,30,40);
    sblock15=new Block(950,185,30,40);

    
    sblock21=new Block(860,145,30,40);
    sblock22=new Block(890,145,30,40)
    sblock23=new Block(920,145,30,40)


    sblock31=new Block(890,105,30,40);

    //
    ball=new Ball(200,50);
    rope=new Rope(ball.body,{x:200,y:300});

}

function draw(){

  if(backgroundImg){
        background(backgroundImg);
  }
  else{
    background("/images/light.png");
  }
    Engine.update(engine);
    ground.display();
    
    stand1.display();
    stand2.display();

    fblock1.display();
    fblock2.display();
    fblock3.display();
    fblock4.display();
    fblock5.display();
    fblock6.display();
    fblock7.display();

    fill ("pink");
    fblock11.display();
    fblock12.display();
    fblock13.display();
    fblock14.display();
    fblock15.display();

    fill ("grey");
    fblock21.display();
    fblock22.display();
    fblock23.display();

    fill("pink");
    fblock31.display();


    //second tower
    
    fill ("grey");
    sblock1.display();
    sblock2.display();
    sblock3.display();
    sblock4.display();
    sblock5.display();
    sblock6.display();
    sblock7.display();

    fill ("pink");
    sblock11.display();
    sblock12.display();
    sblock13.display();
    sblock14.display();
    sblock15.display();

    fill ("grey");
    sblock21.display();
    sblock22.display();
    sblock23.display();

    fill("pink");
    sblock31.display();

    ball.display();
    rope.display();
    
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode===32){
    rope.attach(ball.body);
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  console.log(hour);

  if (hour >= 06 && hour <= 18) {
   backgroundImg = loadImage("images/light.jpg");
  } 
  else {
    backgroundImg = loadImage("images/dark.jpg");
  }

  //backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}