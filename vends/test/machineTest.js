var Product = require('./../product.js');
var Machine = require('./../machine.js');
var CashRegister = require('./../cashRegister.js');
var ChangeError = require('./../changeError.js');
var PriceError = require('./../priceError.js');
var InventoryError = require('./../inventoryError.js');
var ProductError = require('./../productError.js');
var should = require('should');
var assert = require('assert');
var expect = require('chai').expect;
describe ("Vending machine test Suite", function(){
	it("select invalid product", function(){
		var m = new Machine();
		var p = new Product('AA','Coke',25,1);
		m.addProduct(p);
		expect(function() {
			m.select('A');
		}).to.throw(ProductError('A'));	
		
	});
	it("insert invalid one penny coin return", function(){
		var m = new Machine();
		m.insert(1);
		assert( m.display == 'Invalid Coin returned', 'display should be Invalid Coin returned');
	});
	it("insert a dime", function(){
		var m = new Machine();
		m.insert(10);
		assert( m.deposit.balance() == 10, 'deposit should be 10');
	});
	it("insert two quarters", function(){
		var m = new Machine();
		m.insert(25);
		m.insert(25);
		assert( m.deposit.balance() == 50, 'deposit should be 50');
		assert( m.display == 50, 'deposit should be 50');
	});			
	it("dispense coke", function(){
		var m = new Machine();
		var p = new Product('AA','Coke',25,1);
		m.addProduct(p);		
		m.insert(25);
		m.insert(25);
		m.select('AA');
		m.dispense();
		assert( p.inventory == 0, 'coke inventory should be zero');
	});	
	it("add products", function(){
		var m = new Machine();
		var cola = new Product('A','Cola',100,20);
		m.addProduct(cola);	
		var chips = new Product('B','Chips',50,20);		
		m.addProduct(chips);
		var candies = new Product('C','Candy',65,20);
		m.addProduct(candies);		
		assert( cola.inventory == 20, 'cola inventory should be 20');
		assert( cola.price == 100, 'cola price should be 100');
		assert( chips.inventory == 20, 'chips inventory should be 20');		
		assert( chips.price == 50, 'chips price should be 50');		
		assert( candies.inventory == 20, 'candies inventory should be 20');		
		assert( candies.price == 65, 'candies price should be 65');		
	});	
	it("purchase Cola", function(){
		var m = new Machine();
		var cola = new Product('A','Cola',100,5);
		m.addProduct(cola);	
		var chips = new Product('B','Chips',50,20);		
		m.addProduct(chips);
		var candies = new Product('C','Candy',65,20);
		m.addProduct(candies);		
		assert( cola.inventory == 5, 'cola inventory should be 5');
		assert( cola.price == 100, 'cola price should be 100');
		assert( chips.inventory == 20, 'chips inventory should be 20');		
		assert( chips.price == 50, 'chips price should be 50');		
		assert( candies.inventory == 20, 'candies inventory should be 20');		
		assert( candies.price == 65, 'candies price should be 65');		
		m.insert(25);m.insert(25);m.insert(25);m.insert(25);
		m.select('A');
		m.dispense();
		assert( cola.inventory=4, 'cola inventory should be 4');	

	});	
	it("buy candy with 75 cents - return 10 cents", function(){
		var m = new Machine();
		var cola = new Product('A','Cola',100,5);
		m.addProduct(cola);	
		var chips = new Product('B','Chips',50,5);		
		m.addProduct(chips);
		var candies = new Product('C','Candy',65,20);
		m.addProduct(candies);	
		assert( cola.inventory == 5, 'cola inventory should be 5');
		assert( cola.price == 100, 'cola price should be 100');
		assert( chips.inventory == 5, 'chips inventory should be 5');		
		assert( chips.price == 50, 'chips price should be 50');		
		assert( candies.inventory == 20, 'candies inventory should be 20');		
		assert( candies.price == 65, 'candies price should be 65');		
		m.insert(25);m.insert(25);m.insert(25);
		m.select('C');
		m.dispense();
		assert( m.cashRegister.dimes==99, 'dimes should be 99');
	});			
});