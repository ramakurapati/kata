
function InventoryError(procduct) {
  this.name = 'Inventory Error';
  this.message = procduct || 'No Stock';
  this.stack = (new Error()).stack;
}
InventoryError.prototype = Object.create(Error.prototype);
InventoryError.prototype.constructor = InventoryError;
module.exports = InventoryError;