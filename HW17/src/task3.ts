interface Order {
  orderId: string;
  amount: number;
  status: 'pending' | 'shipped' | 'delivered';
}

const orders: Order[] = [
  { orderId: 'ab1', amount: 120, status: 'pending' },
  { orderId: 'ab2', amount: 200, status: 'shipped' },
  { orderId: 'ab3', amount: 90, status: 'delivered' },
  { orderId: 'ab4', amount: 150, status: 'pending' },
  { orderId: 'ab5', amount: 300, status: 'shipped' },
]

function filterOrdersByStatus(
  array: Order[],
  status: Order['status']
): Order[] {
  return array.filter((order) => order.status === status);
}

console.log('Delivered orders: ', filterOrdersByStatus(orders, 'delivered'));
console.log('Shipped orders: ', filterOrdersByStatus(orders, 'shipped'));
