const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone,rubber,iron,gum;

function setup(){
    var canvas = createCanvas(1100,575);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(10,100);
    stone = new Stone(800,200);
    iron = new Iron(500,200);
    plane = new Plane(600,565,1200,20);
    rubber = new Rubber(300,200,50);
    gum = new Gum(650, 560);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    gum.display();
 
}