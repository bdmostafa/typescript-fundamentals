"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = "Hello TypeScript!!!";
console.log(msg);
// Variable declarations
var x = 1;
var y = 2;
// let x = 5 // can not be redeclared by let
var z; // Okay without initialization
// const b;  // Not valid without initialization
// variable types in typescript
var isStart = true;
var sum = 9;
var name = "Mostafa";
// sum = 'Hello'; // not valid because only number type is allowed
var intro = "This is " + name;
console.log(intro);
// Declaring variable types
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// n = true; // Not valid because boolean not expected here
isNew = true; // valid
// isNew = 12; // Not valid, only boolean is expected
// myName = false; // Not valid because boolean not expected here but only string
// Declaring with using array type
var list1 = [5, 6, 7];
var list2 = [7, 8, 9];
// Mixed type array
var myInfo = ["Mostafa", 29];
// let myInfo1: [string, number] = [29, "Mostafa"]; // Not valid
// enum keyword
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); // 5
// To get rid of variable types declaration, use any in typescrpt
var anyValue = "Mostafa";
anyValue = false;
anyValue = 1;
console.log(anyValue); // 1
var myVar = 111;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object"
        && "name" in obj;
}
if (hasName(myVar)) {
    console.log(myVar.name);
}
// (myVar as string).toLowerCase();
// When any value is not assigned, its type is any
var a;
a = true;
a = 52;
// When a value is assigned, it's type can not be changed
var b = true;
// b = 5;  // Not valid
var multiType;
multiType = true;
multiType = 123;
// multiType = "m";  // Not valid
var anyType;
anyType = true;
anyType = 123;
anyType = "m";
// Functions - optional/default parameters - return type
// default parameter is like optional parameter
// function mySum(num1: number, num2?: number): number {
function mySum(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(mySum(2, 10)); // 12
console.log(mySum(2)); // 7
// Objects
function myObj(obj) {
    return obj.name + " - " + obj.age + " - " + obj.isDeveloper;
}
var me = {
    name: "Mostafa",
    age: 29,
    isDeveloper: true
};
console.log(myObj(me));
function myBio(person) {
    return person.name + " - " + (person.age ? person.age : "N/A") + " - " + person.profession;
}
var m = {
    name: "Mostafa",
    // age: 29,
    profession: "Developer"
};
console.log(myBio(m));
// Classess
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee("Mostafa");
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.distributeTask = function () {
        console.log("Manager distributing tasks");
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Shams");
manager1.distributeTask();
manager1.greet();
console.log(manager1.employeeName);
// Access Modifiers
// By default each class member is public. So we can access member through the program freely
// private property accessibility is only within the class
// protected property accessibility is within the class and the clasess derived from it
// class Employee {
//     public employeeName: string;
//     private employeeName: string;
//     protected employeeName: string;
//     constructor(name: string){
//         this.employeeName = name;
//     }
//     greet(){
//         console.log(`Good Morning ${this.employeeName}`);
//     }
// }
// const employee1 = new Employee("Mostafa");
// console.log(employee1.employeeName);
// employee1.greet();
// class Manager extends Employee {
//     constructor(managerName: string){
//         super(managerName);
//     }
//     distributeTask(){
//         console.log(`Manager distributing tasks ${this.employeeName}`);
//     }
// }
// let manager1 = new Manager("Shams");
// manager1.distributeTask();
// manager1.greet();
// console.log(manager1.employeeName);
