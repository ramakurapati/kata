var Deposit = require('./../deposit.js');
var InvalidCoin = require('./../invalidCoin.js');
var should = require('should');
var assert = require('assert');
var expect = require('chai').expect;
describe ("Deposit Test Suite", function(){

	it("Initial deposit test", function(){
		var d = new Deposit();
		d.insert(10);
		assert( d.balance() === 10, 'initial deposit 10 shuld equal to balance 10');
		d.insert(25);
		assert( d.balance() === 35, 'add quarter to initial deposit 10 shuld equal to balance 35');
	});
	it("Insert Invalid Coins", function(){
		var d = new Deposit(10);
		try{
			d.insert(0);
			should.fail('no error was thrown when it should have been')
		}catch(e){
			// console.log(e);
		}
	});
	it("Invalid coin insert test", function(){
		var d = new Deposit();
		expect(function() {
			d.insert(20);
		}).to.throw(InvalidCoin(20));	
	});
	it("Deposit return  test", function(){
		var d = new Deposit();
		d.insert(25);
		d.insert(10);
		d.insert(5);
		assert( d.balance()=== 40, 'balance should be 40');
		var returnedCoins = d.clear();
		assert(returnedCoins.quarters===1,'returned quarters should be one');
		assert(returnedCoins.dimes===1,'returned dimes should be one');
		assert(returnedCoins.nickels===1,'returned nickels should be one');		
		assert(d.quarters.length===0,'quarters should be empty');
		assert(d.dimes.length===0,'dimes should be empty');
		assert(d.nickels.length===0,'nickels should be empty');
		assert( d.balance()=== 0, 'balance should be 0 after return');		
	});
});

