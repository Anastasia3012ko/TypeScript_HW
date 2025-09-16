
interface Product {
    name: string;
    price: number;
}
interface CalculateDiscount {
    (product: Product, discount: number): number
}

const newPrice: CalculateDiscount = (product, discount) => {
    return product.price - (product.price * discount) / 100;
}

const myProduct: Product = {
    name: 'Phone',
    price: 1400
}

console.log(`New price with discount: ${newPrice(myProduct, 15)}$`);
