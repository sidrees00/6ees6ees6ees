import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  
  constructor(age,job,canFly,color,food,eat,treasureChest){
  	
  	super(food,eat,treasureChest);
  	
  	this.age = 40;
  	this.job = 'gamble';
  	this.canFly = false;
  	this.color = 'grey';
  };
  
  forage(){
  	return "I am too old, let me play cards instead";
  };

  gamble(){
  	this.treasureChest += 1;
  };

}

export default RetiredForagerBee;