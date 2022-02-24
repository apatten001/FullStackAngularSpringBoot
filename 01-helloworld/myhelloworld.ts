import {Customer} from '../classes/Customer';

console.log("Hello World");
console.log("Time to get this" + "Arnold");

let found: boolean = true;

let grade: number = 86.4;

let name1: string = "arnold";
let name2: string = "Jen";

let any2: any = "Jen"; //lose type safety for an array setup

console.log(`Hi ${name1} ${name2}`);

let cust = new Customer("AJ", "JOJO");
console.log(cust.firstName+ " " + cust.lastName)


