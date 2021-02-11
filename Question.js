class Question {
  constructor(){
    this.input1 = createInput("Name");
    this.input2 = createInput("enter option number");
    this.button = createButton('Submit');
    this.question = createElement('h1');
    this.option1 = createElement('p1');
    this.option2 = createElement('p2');
    this.option3 = createElement('p3');
    this.option4 = createElement('p4');
    this.title = createElement('h2');
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  
display(){
this.title.html("My Quiz Game");
this.title.position(350,0);

this.question.html("Question:-What starts and ends with letter E,but can contain  only one letter?");
this.question.position(170,60);
this.option1.html("1: Envelope");
this.option1.position(170,130);
this.option2.html("2: Everyone");
this.option2.position(170,160)
this.option3.html("3: Estimate");
this.option3.position(170,180);
this.option4.html("4: Enter");
this.option4.position(170,200);

this.input1.position(150,230);
this.input2.position(350,230);
this.button.position(190,260);

this.button.mousePressed(()=>{
  this.input1.hide();
  this.input2.hide();
  this.button.hide();
  contestant.name = this.input1.value();
  contestantCount+=1;
  contestant.index = contestantCount;
  contestant.update();
  contestant.updateCount(contestantCount);

 });

}

}