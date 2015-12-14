
function PriceError(price) {
  this.name = 'Price Error';
  this.message = price || 'Invalid Price';
  this.stack = (new Error()).stack;
}
PriceError.prototype = Object.create(Error.prototype);
PriceError.prototype.constructor = PriceError;
module.exports = PriceError;

function InvalidProduct(code) {
  this.name = 'InvalidProduct';
  this.message = code || 'Invalid Selection';
  this.stack = (new Error()).stack;
}
InvalidProduct.prototype = Object.create(Error.prototype);
InvalidProduct.prototype.constructor = InvalidProduct;


module.exports = InvalidProduct;
