
function ProductError(code) {
  this.name = 'Product Error';
  this.message = code || 'Product Error';
  this.stack = (new Error()).stack;
}
ProductError.prototype = Object.create(Error.prototype);
ProductError.prototype.constructor = ProductError;
module.exports = ProductError;

