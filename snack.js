class Snack {
  constructor(type){
    this.deliciousLevel = "extra";
    this.type= type;
    this.amount = 100;
    this.isInLunchBox= false;
    this.cuttingItClose= false;
    if (this.type.includes("Fruit")){
      this.healthy= true;
    } else {
      this.healthy = false;
    }
  }
  getEaten(){
    this.amount-=10;
    if (this.amount<=20){
      this.cuttingItClose = true;
    }
  }
}

module.exports = Snack;
