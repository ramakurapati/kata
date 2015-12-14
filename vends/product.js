var PriceError = require('./priceError.js');
var InventoryError = require('./inventoryError.js');
var Product = function(code,description,price,inventory){
	this.code=code;
	this.description=description;
	this.price=price;
	this.inventory=inventory;
};

Product.prototype.dispense=function(price){

	if(this.inventory==0) throw new  InventoryError(this.code);	
	if(price<this.price) 	throw new PriceError(price);
	this.inventory=this.inventory-1;
}
Product.prototype.dispense0=function(price){
	if(price>=this.price && this.inventory>0) this.inventory=(this.inventory-1);
	else throw new Error("Insufficient funds "+price+ " price is "+this.price);
}
Product.prototype.add=function(quantity){
	this.inventory=this.inventory+quantity;
}
module.exports = Product;
// var p = new Product('A','Coke',25,0);
// p.dispense(10);
// p.dispense(25);