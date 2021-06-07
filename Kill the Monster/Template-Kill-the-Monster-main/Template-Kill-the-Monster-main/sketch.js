const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var hero, enemy, background;
var platform;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;

function preload() {
  //preload the images here 

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  // create sprites here
  platform = new Ground(500, 500, 1000, 25);

  box1 = new Box(500, 275, 50, 75);
  box2 = new Box(500, 350, 50, 75);
  box3 = new Box(500, 425, 50, 75);
  box4 = new Box(575, 275, 50, 75);
  box5 = new Box(575, 350, 50, 75);
  box6 = new Box(575, 425, 50, 75);
  box7 = new Box(650, 275, 50, 75);
  box8 = new Box(650, 350, 50, 75);
  box9 = new Box(650, 425, 50, 75);
  box10 = new Box(725, 275, 50, 75);
  box11 = new Box(725, 350, 50, 75);
  box12 = new Box(725, 425, 50, 75);

  enemy = new Enemy(850, 400, 150, 150);
  hero = new Player(300, 300, 150, 100);

}

function draw() {
  background(180);

  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  enemy.display();
  hero.display();
}

