

var playercount, database;
var position, form,player,game;
var canvas, bgimg;
var Gamestate=0


function setup(){

  database = firebase.database();
  canvas = createCanvas(600,600);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");  

}