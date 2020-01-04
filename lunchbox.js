var Snack = require('./snack');

class LunchBox {
  constructor(boxInstance){
    this.owner = boxInstance.owner;
    this.material = boxInstance.madeOf;
    this.shape = boxInstance.shape;
    this.color = boxInstance.color;
    this.handle = true;
    this.snacks = [];
  }
  acquireSnack(snack){
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks(){
    return this.snacks.filter(function(snack){
      return snack.type.includes('Fruit');
    });
  }
}

module.exports = LunchBox;
