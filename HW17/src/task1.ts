function calculateTotal (price: number, quantity: number, discount: number = 0): number {
   const totalPrice =  price * quantity;
   const finallyPrice = totalPrice - (totalPrice * discount / 100) 
   return finallyPrice;
}

console.log(`Стоимость товара с учетом скидки: ${calculateTotal(30 , 2, 5)}$`);
console.log(`Стоимость товара с учетом скидки: ${calculateTotal(20 , 5)}$`);

