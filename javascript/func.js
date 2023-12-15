"use strict";
const mysymb = Symbol("key1");
const createuser = {
  name: "Subhajit",
  "full name": "Subhajit Maji",
  email: "subhajitbb12@gmail.com",
  [mysymb]: "mysim1",
  age: 18,
};

console.log(createuser.name);
const demo = [1, "subha", { subha: 1, name: "master" }];
console.log(demo);
