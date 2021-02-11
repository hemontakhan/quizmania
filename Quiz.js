class Quiz {
  constructor(){}

getState(){
var gameStateRef  = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
 })
}

update(state){
database.ref('/').update({
gameState: state
    });
  }

async start(){
  if(gameState === 0){
     contestant = new Contestant()
    var contestantCountref = await database.ref('ConestantCount').once("value");
    if(contestantCountref.exists()){
       contestantCount = contestantCountref.val();
       contestant.getCount();
    }
   
    question = new Question();
    question.display();
  }
}

play(){
quiz.hide();

for(var plr in allContestants){
    var correctAns = 2;
    if(correctAns === allContestants[plr].answer){
       fill("green")
       background("yellow");
    } else {
      fill("red")
    
    }
 }

}
}