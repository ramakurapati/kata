var Product =require('./product.js');
var Deposit =require('./deposit.js');
var InvalidCoin = require('./invalidCoin.js');
var PriceError = require('./priceError.js');
var ProductError = require('./productError.js');
var CashRegister = require('./cashRegister.js');
var ChangeError = require('./changeError.js');
var InventoryError = require('./inventoryError.js');
var Machine = function(){
	this.products ={};
	this.deposit=new Deposit();
	this.display="Insert Coin";
	this.code="";
	this.cashRegister = new CashRegister();
	this.cashRegister.loadCoins(100,100,100);
}
Machine.prototype.addProduct = function(product){
	if(this.products[product.code]=== undefined ){
		this.products[product.code]=product;
	}else{
		var p = this.products[product.code];
		p.add(product.inventory); 
	}
}
Machine.prototype.loadCoins=function(quarters,dimes,nickels){
	this.cashRegister.loadCoins(quarters,dimes,nickels);
};
Machine.prototype.select= function(code){
	var p = this.products[code];
	if(typeof(p)== 'undefined' ) {
		throw ProductError(code); 
	}
	this.code=code;
};

Machine.prototype.insert= function(coin){
	try{
		this.deposit.insert(coin);
		this.display=this.deposit.balance();
	}catch(e){
		if (e instanceof InvalidCoin) {
			this.display="Invalid Coin returned";
		} else   {
			console.log(" handle new error");
		}
	};
}
Machine.prototype.dispense= function(){
	try{
		var p = this.products[this.code];
		var enoughDeposit = this.deposit.balance() - p.price;
		if(enoughDeposit<0) throw new PriceError();
		this.cashRegister.dispenseChange(enoughDeposit); 
		p.dispense(this.deposit.balance());
	}catch(e){
		if (e instanceof InvalidCoin) {
			console.log(e.name + ': ' + e.message);
		} else if (e instanceof ChangeError) {
			console.log(e.name + ': not enoughDeposit ' + e.message);
		}

	};
}
module.exports = Machine;
// var m = new Machine();
// var p = new Product('AA','Coke',25,1);
// m.addProduct(p);
// m.insert(25);m.insert(25);
// m.select('AA');
// m.dispense();