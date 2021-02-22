
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}




// function readPosition(data){
//   position = data.val();
//   console.log(position.x);
//   hypnoticBall.x = position.x;
//   hypnoticBall.y = position.y;
// }

// function showError(){
//   console.log("Error in writing to the database");
// }
