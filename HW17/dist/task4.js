"use strict";
const productInfo = ['Laptop', 1500, 30];
const inventory = {
    Laptop: 25,
    PC: 20,
    Phone: 10
};
function updateStock(inventory, product) {
    const [name, , quantity] = product;
    inventory[name] = (inventory[name] || 0) + quantity;
    return inventory;
}
console.log('Updated object inventory: ', updateStock(inventory, productInfo));
//# sourceMappingURL=task4.js.map