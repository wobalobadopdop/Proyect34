const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var boxes = [];
function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(var i = 1;i <= 400;i +=50){
  boxes.push(new Box(600,i,50,50))
  }
  for(var i = 10;i <= 400;i +=50){
    boxes.push(new Box(800,i,50,50))
    }
    for(var i = 200;i <= 400;i +=50){
      boxes.push(new Box(700,i,50,50))
      }
}

  

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  for(var i = 0;i < boxes.length;i +=1){
    boxes[i].display();
    }

  hero.display();
  rope.display();
  monster.display();



}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  portalgun1.fly();
  
}
