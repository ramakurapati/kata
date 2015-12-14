
function InvliadCoin(coin) {
  this.name = 'Invliad Coin';
  this.message = coin || 'Inserted Invliad Coin';
  this.stack = (new Error()).stack;
}
InvliadCoin.prototype = Object.create(Error.prototype);
InvliadCoin.prototype.constructor = InvliadCoin;
module.exports = InvliadCoin;