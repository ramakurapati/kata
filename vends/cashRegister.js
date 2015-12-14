	var ChangeError = require('./changeError.js');

var CashRegister = function(){
	this.nickels=0;
	this.dimes=0;
	this.quarters=0;
};
CashRegister.prototype.loadCoins=function(quarters,dimes,nickels){
	this.quarters=this.quarters+quarters;
	this.dimes=this.dimes+dimes;
	this.nickels=this.nickels+nickels;
};
CashRegister.prototype.dispenseChange=function(amount){
	var change = this.computeChange(amount);
	if(this.hasChange(amount)){
		this.quarters=this.quarters-change.quarters;
		this.dimes=this.dimes-change.dimes;
		this.nickels=this.nickels-change.nickels;
	}else{
		throw new ChangeError(amount);
	}
};
CashRegister.prototype.computeChange=function(amount){
	var qc = Math.floor(amount/25);
	var todimes = amount%25
	var dc = Math.floor(todimes/10);
	var tonickels= todimes%10;
	var nc = Math.floor(tonickels/5);
	var change={quarters:0,dimes:0,nickels:0};
	change.quarters=qc; 
	change.dimes=dc;
	change.nickels=nc;
	return change;
};
CashRegister.prototype.hasChange=function(amount){
	var change = this.computeChange(amount);
	if(change.quarters>this.quarters) return false; 
	if(change.dimes>this.dimes) return false; 
	if(change.nickels>this.nickels) return false; 
	return true;
};
module.exports = CashRegister;
// var r = new CashRegister();
// console.log(r.getChange(15));