var canvas;

var database,allContestants,contestantCount;
var gameState=0;
var answer = 0;
var quiz;
var contestant;
var question;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  quiz = new Quiz()
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

}
