var Product = require('./../product.js');
var PriceError = require('./../priceError.js');
var InventoryError = require('./../inventoryError.js');
var should = require('should');
var assert = require('assert');
var expect = require('chai').expect;
describe ("Product Test Suite", function(){
	it("dispense product with valid inventory  test", function(){
		var p = new Product('AA','Coco Cola',10,2);
		p.dispense(10);
		assert( p.inventory === 1, 'after dispensing first coco cola of 2 cans, inventory should be 1 ');
	});
	it("dispense product with in-sufficient price   test", function(){
		var p = new Product('AA','Coco Cola',10,2);
		expect(function() {
			p.dispense(5);
		}).to.throw(PriceError);		
		assert( p.inventory === 2, 'inventory should not be changed after in-sufficient price dispense ');
	});
	it("dispense product with zero inventory test", function(){
		var p = new Product('AA','Coco Cola',10,0);
		expect(function() {
			p.dispense(20);
		}).to.throw(InventoryError);		
	});
	it("add product inventory  test", function(){
		var p = new Product('AA','Coco Cola',10,10);
		p.add(10);
		assert( p.inventory === 20, 'adding 10 cans to intial inventory of 10 should be 20 ');

	});	
});