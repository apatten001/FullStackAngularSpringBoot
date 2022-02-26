import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(12,11);
let myCircle = new Circle(12,11,6);
let myRectangle = new Rectangle(0,0,3,4)


// declare array of shapes

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);
theShapes.push(myShape);


for (let shape of theShapes){
    console.log(shape.getInfo());
}





