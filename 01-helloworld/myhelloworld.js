"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("../classes/Customer");
console.log("Hello World");
console.log("Time to get this" + "Arnold");
var found = true;
var grade = 86.4;
var name1 = "arnold";
var name2 = "Jen";
var any2 = "Jen"; //lose type safety for an array setup
console.log("Hi ".concat(name1, " ").concat(name2));
var cust = new Customer_1.Customer("AJ", "JOJO");
console.log(cust.firstName + " " + cust.lastName);
