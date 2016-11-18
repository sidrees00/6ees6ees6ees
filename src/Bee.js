import Grub from './Grub'

class Bee extends Grub {
  constructor(age,color,food,eat,job){
  	super(food,eat); 
  	this.age = 5;
  	this.color = 'yellow';
  	this.job = 'Keep on growing';
  };
}
 






export default Bee;