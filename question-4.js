// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
// 	{ name: "Banana", price: 10, quantity: 2000 },
// 	{ name: "Orange", price: 30, quantity: 60 },
// ];

let minQuantity = inventory[0];

for (let i = 0; i < inventory.length; i++) {
  if (minQuantity.quantity > inventory[i].quantity) {
    minQuantity = inventory[i]
  }
}
minQuantity = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantity.name} ซึ่งมี ${minQuantity.quantity} ชิ้น`;
console.log(minQuantity);