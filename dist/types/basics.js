"use strict";
//Boolean
let isDone = false;
let isLogin;
// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//String
let color = "blue";
color = 'red';
//Array
let list1 = [1, 2, 3];
// Generic array
let list2 = [1, 2, 3];
//Tuple
let x;
x = ['hello', 10]; // ok
//x = [10, 'hello'] // error
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c = Color.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
let ColorName = Color[2];
//Any
let notSure = 4;
notSure = "maybe a string";
notSure = false;
let list = [1, true, "false"];
list[1] = 100;
// void
function warnUser() { console.log("warned"); }
let unusable = undefined;
//unusable = null; // ok  if`--StrictNullChecks` is not given
// Null or Undefined
let u = undefined;
let n = null;
// primitive Type annotations
const strName = 'John';
const heightInCentimeters = 18.88;
const isActive = true;
// array type annotation
const arrName = ['John', 'Nick', 'Rebecca', 'Lily'];
// function type annotation with parameter type annotation
// and return type annotation.
let sayHello;
// implementation of sayHello function
sayHello = function (name) {
    return 'Hello' + name;
};
// Object type annotation
let person;
// Implementation of a person object
person = {
    name: 'Mark',
    age: 25
};
