

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
car=new Car(200,200);
cat1 =new Cat1(400,150);
cat2 =new Cat2(200,150);
cat3 =new Cat3(910,350);
cat4 =new Cat4(500,350);
cat6 =new Cat1(700,350);
cat7 =new Cat2(400,350);
cat8 =new Cat4(900,50);
cat9 =new Cat4(100,550);
cat10 =new Cat3(600,150);
cat11=new Cat4(100,350);
cat12=new Cat1(100,150);

	Engine.run(engine);

}

function draw() {

  background(0);
  Engine.update(engine)
 car.display();
 cat1.display();
 cat2.display();
 cat3.display();
 cat4.display();
 cat6.display();
 cat7.display();
 cat8.display();
 cat9.display();
 cat10.display();
 cat11.display();
 cat12.display();
 //console.log(car.body.postion.x)
}

