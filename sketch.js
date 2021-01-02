const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var stand, block1, block2, block3, block4, block5,  block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var polygon, polygonImage;
var score = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Stand(600,height,10,10);

    //level one
    block1 = new Block(330,250,30,40);
    block2 = new Block(340,250,30,40);
    block3 = new Block(350,250,30,40);
    block4 = new Block(360,250,30,40);
    block5 = new Block(370,250,30,40);
    block6 = new Block(380,250,30,40);
    block7 = new Block(390,250,30,40);

    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    //level top
    block16 = new Block(390,155,30,40);
    polygon = Bodies.circle(50,170,20);
    World.add(world,polygon);
    this.image = loadImage("polygon.png");
    slingShot = new SlingShot(this.polygon,{x:100,y:200});    
 }

function draw(){
   background(backgroundImg);
   Engine.update(engine);

   ground.display();
   stand.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   polygon.display();
   slingShot.display();

   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block8.score();
   block9.score();
   block10.score();
   block11.score();
   block12.score();
   block13.score();
   block14.score();
   block15.score();
   block16.score();


   imageMode(CENTER);
   image(polygonImage, polygon.position.x, polygon.position.y, 40,40);

   textSize(10);
   text("SCORE:"+score,750,40);
}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingShot.fly();
}

function keyPressed(){
   if(keyCode === 32){
      slingShot.attach(this.polygon);
   }
}