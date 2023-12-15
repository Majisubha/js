const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
const nameSet = new Set("subhaajjsit");
console.log(nameSet);
console.log(ordersSet.has("Pasta"));
ordersSet.add("rice");
console.log(ordersSet.has("rice"));
ordersSet.delete("rice");
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}

const staff = [
  "waiter",
  "manager",
  "washer",
  "cook",
  "cleaner",
  "waiter",
  "manager",
  "washer",
];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log([...new Set(staff)].length);
