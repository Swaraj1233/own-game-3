var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1i,car2i,car3i,car4i,track;

var balli,ball;

var xPos=375;

var goal1,goal2;

function preload(){
  car1i=loadImage ("images/blue.png")
  car2i=loadImage ("images/blue.png")
  car3i=loadImage ("images/red.png")
  car4i=loadImage ("images/red.png")
  track=loadImage("images/field.png")
  balli = loadImage("images/football.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState=== 2){
    game.end();
  }
}

