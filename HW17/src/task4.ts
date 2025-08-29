type ProductInfo = [string, number, number];
const productInfo: ProductInfo = ['Laptop', 1500, 30];

interface Inventory {
    [name: string]: number

}
const inventory: Inventory = {
    Laptop: 25,
    PC: 20, 
    Phone: 10
}

function updateStock(inventory: Inventory, product: ProductInfo): Inventory {
  const [name, , quantity] = product; 
  inventory[name] = (inventory[name] || 0) + quantity; 
  return inventory; 
}

console.log('Updated object inventory: ', updateStock(inventory, productInfo));