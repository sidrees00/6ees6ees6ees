import Bee from './Bee'

class HoneyMakerBee extends Bee {
	constructor(age,job,color,food,eat,honeyPot){
		super(color,food,eat)
		this.age = 10;
		this.job = 'make honey';
		this.honeyPot = 0;
	}
	
	makeHoney(){
		this.honeyPot += 1;
	}
	giveHoney(){
		this.honeyPot -= 1;
	}
};

export default HoneyMakerBee;
