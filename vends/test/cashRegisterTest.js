var assert = require('assert');
var CashRegister = require('./../cashRegister.js');
var ChangeError = require('./../changeError.js');
var expect = require('chai').expect;
describe("Cash Register Test Suite", function(){
	it("Add quarters " ,function(){
		var r = new CashRegister();
		r.loadCoins(2,0,0);
		assert( r.quarters === 2, 'add 2 quarters  shuld equal to 2');
		
	});
	it("Get Change for 35 cents" ,function(){
		var r = new CashRegister();
		var change =r.computeChange(35);
		assert( change.quarters === 1, 'should be one quarter for 35 cents change');
		assert( change.dimes === 1, 'should be one dime for 35 cents change');
		assert( change.nickels === 0, 'should be no nickels for 35 cents change');	
	});
	it("Get Change for 65 cents" ,function(){
		var r = new CashRegister();
		var change =r.computeChange(65);
		assert( change.quarters === 2, 'should be two quarters for 65 cents change');
		assert( change.dimes === 1, 'should be one dime for 65 cents change');
		assert( change.nickels === 1, 'should be one nickels for 65 cents change');	
	});
	it("Get Change for 5 cents" ,function(){
		var r = new CashRegister();
		var change =r.computeChange(5);
		assert( change.quarters === 0, 'should be no quarters for 5 cents change');
		assert( change.dimes === 0, 'should be no dimes for 5 cents change');
		assert( change.nickels === 1, 'should be one nickel for 5 cents change');	
	});	
	it("Not enough change for 75 cents" ,function(){
		var r = new CashRegister();
		r.loadCoins(2,10,10);
		assert( r.hasChange(75)==false, 'there should not be 3 quarters in the registger');
	});
	it("Got enough change for 75 cents" ,function(){
		var r = new CashRegister();
		r.loadCoins(10,10,10);
		assert( r.hasChange(125)==true, 'there should be 4 quarters,2 dimes and 1 nickels in the registger');
	});	
	it("Throw not enough change error for 75 cents" ,function(){
		var r = new CashRegister();
		r.loadCoins(2,10,10);
		assert( r.hasChange(75)==false, 'there should change error thrown');
		expect(function() {
			r.dispenseChange(75);
		}).to.throw(ChangeError(75));	
	});					
});