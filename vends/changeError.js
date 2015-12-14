
function ChangeError(amount) {
  this.name = 'Change Error';
  this.message = amount || 'Inserted exact amount';
  this.stack = (new Error()).stack;
}
ChangeError.prototype = Object.create(Error.prototype);
ChangeError.prototype.constructor = ChangeError;
module.exports = ChangeError;