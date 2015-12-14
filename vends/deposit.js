var InvalidCoin = require('./invalidCoin.js');

var Deposit = function(){
	this.nickels=[];
	this.dimes=[];
	this.quarters=[];
	this.status=""
};
Deposit.prototype.insert=function(coin){
	this.status=coin+ " added";
	switch(coin){
		case 5: this.nickels.push(coin);break;
		case 10: this.dimes.push(coin); break;
		case 25: this.quarters.push(coin);break;
		default: {
			this.status="Invalid coin";
			throw new InvalidCoin(coin);
		}
	}
}
Deposit.prototype.balance = function(){
	var sum =0;
	for(var i=0;i<this.nickels.length;i++){
		sum=sum+this.nickels[i];
	}
	for(var i=0;i<this.dimes.length;i++){
		sum=sum+this.dimes[i];
	}
	for(var i=0;i<this.quarters.length;i++){
		sum=sum+this.quarters[i];
	}
	return sum;
};
Deposit.prototype.clear = function(){
	var change ={quarters:0,dimes:0,nickels:0};
	change.quarters=this.quarters.length;
	change.dimes=this.dimes.length;
	change.nickels=this.nickels.length;

	this.nickels=[];
	this.dimes=[];
	this.quarters=[];
	return change;
};
module.exports = Deposit;
// var d = new Deposit(10);
// d.add(10);
// d.add(25);
// d.add(15);
// console.log(d.balance());