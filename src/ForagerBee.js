import Bee from './Bee'

class ForagerBee extends HoneyMakerBee {
  
  constructor(age, color, food, eat, job, canFly, treasureChest){
  
	  super(color,food,eat);
	  
	  this.age = 10;
	  this.job = 'find pollen';
	  this.canFly = true;
	  this.treasureChest = [];
  }

  forage(item) {
  	this.treasureChest.push(item);
  };

};





export default ForagerBee;