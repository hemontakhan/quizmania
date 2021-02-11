class Contestant{
  constructor(){
    this.index = null;
    this.name = null;
    this.answer = null;
  }

  getCount(){
    var contestCountRef = database.ref('ConestantCount');
    contestCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var constIndex = "contestants/constant" + this.index;
    database.ref(constIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var constInfoRef = database.ref('contestants');
    constInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }

}