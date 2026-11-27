// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity = 200;
inventory.push({name: "Orange", price: 20, quantity: 300 });

let totalStockPrice = 0;
for (let i = 0; i < inventory.length; i++) {
  totalStockPrice += inventory[i].price * inventory[i].quantity
}
console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก", totalStockPrice, "บาท");