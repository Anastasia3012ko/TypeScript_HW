const newPrice = (product, discount) => {
    return product.price - (product.price * discount) / 100;
};
const myProduct = {
    name: 'Phone',
    price: 1400
};
console.log(`New price with discount: ${newPrice(myProduct, 15)}$`);
export {};
//# sourceMappingURL=task3.js.map