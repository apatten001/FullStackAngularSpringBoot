import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(12,11);
console.log(myShape.getInfo());

let myCircle = new Circle(12,11,6);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0,0,3,4)
console.log(myRectangle.getInfo())
