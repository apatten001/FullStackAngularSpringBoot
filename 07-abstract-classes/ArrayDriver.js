"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");


var myShape = new Shape_1.Shape(12, 11);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(12, 11, 6);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 4);
console.log(myRectangle.getInfo());
