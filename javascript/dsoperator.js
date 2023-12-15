"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivary: function ({
    starterIndex = 0,
    mainIndex = 1,
    location = "some where",
  }) {
    console.log(
      `deliver the order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${location}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.orderDelivary({
  mainIndex: 2,
  starterIndex: 1,
  location: "mera ghar",
});

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
const nums = [2, 3, [5, 4]];
const [i, , [j]] = nums;
console.log(i, j);
const [m = 0, n = 1, p = 9] = [4, 5];
console.log(m, n, p);
let a = 99;
let b = 15;
const obj = { a: 12, b: 22 };
({ a, b } = obj);
console.log(a, b);
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
const newMenu = [...restaurant.mainMenu];
console.log(newMenu);
const string = "subha";
console.log(...string);
const newString = [...string, "", "s"];
console.log(newString);
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: "Subhajit" };
console.log(newRestaurant);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
const number = [1, 2, 3, 4, 5, 6];
const add = function (...numbers) {
  console.log(...numbers);
};
add(...number);
console.log(undefined || "" || null || 0);
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? "closed";
  console.log(`${day} we open at ${open}`);
}
console.log(restaurant.orderPasta?.(0, 1) ?? "Method does not exist");
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and we close at ${close}`);
}
