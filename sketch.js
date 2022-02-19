var canvas, backgroundImage;
var tierra1,tierra2,tierra3,tierra4, tierra5,tierra6,tierra7,tierra8,tierra9,tierra10,tierra11,tierra12,tierra13,tierra14,tierra15,tierra16,tierra17,tierra18,tierra19,tierra20,tierra21;
var gameState = 0;
var playerCount;
var allPlayers;
var distanceX = 0;
var distanceY = 0;
var database;
var pared;

var form, player, game;


//Definir variable de los osos
var bears,bear1,bear2,bear3;

var forest, bear1_img, bear2_img, bear3_img;
//Definir variable de los cazadores
var cazador1, cazador2,cazador3;

var cazador1_img,cazador2_img, cazador3_img;

function preload(){
  forest = loadImage("images/Forest1.png");
  bear1_img = loadImage("images/Bear1.png");
  bear2_img = loadImage("images/Bear2.png");
  bear3_img = loadImage("images/Bear3.png");

  cazador1_img = loadImage("images/Cazador1.png");
  cazador2_img = loadImage("images/Cazador2.png");
  cazador3_img = loadImage("images/Cazador3.png");
}


function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

   tierra1 = createSprite(0,100,150,100);
   tierra1.shapeColor = "red";

   tierra2 = createSprite(200,275,200,50);
   tierra2.shapeColor = "red";
    
   tierra3 = createSprite(220,50,250,50);
   tierra3.shapeColor = "red";
    
   tierra4 = createSprite(220,90,20,50);
   tierra4.shapeColor = "red";

   tierra5 = tierra5= createSprite(330,200,20,200);
   tierra5.shapeColor = "red";

   tierra6= createSprite(350,200,60,20);
   tierra6.shapeColor = "red";

   tierra7= createSprite(390,150,60,20);
   tierra7.shapeColor = "red";

   tierra8= createSprite(390,250,60,20);
   tierra8.shapeColor = "red";

   tierra9 = createSprite(220,330,300,20);
   tierra9.shapeColor = "red";

   tierra10 = createSprite(0,230,150,130);
   tierra10.shapeColor = 'olive';

  tierra11 = createSprite(0,330,80,20);
   tierra11.shapeColor = "red";

   tierra12 = createSprite(0,330,80,20);
   tierra12.shapeColor = "red";

   tierra13= createSprite(370,315,20,50);
   tierra13.shapeColor = "red";

   tierra14= createSprite(200,370,220,20);
   tierra14.shapeColor = "red";

   tierra15= createSprite(335,380,20,50);
   tierra15.shapeColor = "red";

   tierra16= createSprite(60,380,20,50);
   tierra16.shapeColor = "red";

   tierra17= createSprite(150,0,20,25);
   tierra17.shapeColor = "red";

   tierra18= createSprite(200,25,20,25);
   tierra18.shapeColor = 'olive';

   tierra19= createSprite(250,0,20,25);
   tierra19.shapeColor = "red";

   tierra20= createSprite(300,25,20,25);
   tierra20.shapeColor = "red";

   tierra21= createSprite(370,0,20,25);
   tierra21.shapeColor = "red";
   

}

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  tierra1.display();
  tierra2.display();
  tierra3.display();
  tierra4.display();
  tierra5.display();
  tierra6.display();
  tierra7.display();
  tierra8.display();
  tierra9.display();
  tierra10.display();
  tierra11.display();
  tierra12.display();
  tierra13.display();
  tierra14.display();
  tierra15.display();
  tierra16.display();
  tierra17.display();
  tierra18.display();
  tierra19.display();
  tierra20.display();
  tierra21.display();

  drawSprites();
}
