export {};
let msg = "Hello TypeScript!!!"
console.log(msg);


// Variable declarations
let x = 1;
const y = 2;

// let x = 5 // can not be redeclared by let

let z; // Okay without initialization
// const b;  // Not valid without initialization


// variable types in typescript
let isStart: boolean = true;
let sum: number = 9;
let name: string = "Mostafa";

// sum = 'Hello'; // not valid because only number type is allowed

let intro: string = `This is ${name}`;

console.log(intro);

// Declaring variable types
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// n = true; // Not valid because boolean not expected here
isNew = true; // valid
// isNew = 12; // Not valid, only boolean is expected
// myName = false; // Not valid because boolean not expected here but only string

// Declaring with using array type
let list1: number[] = [5, 6, 7];
let list2: Array<number> = [7, 8, 9];

// Mixed type array
let myInfo: [string, number] = ["Mostafa", 29];
// let myInfo1: [string, number] = [29, "Mostafa"]; // Not valid

// enum keyword
enum Color { Red=3, Green, Blue };
let c: Color = Color.Blue;

console.log(c); // 5

// To get rid of variable types declaration, use any in typescrpt
let anyValue: any = "Mostafa";
anyValue = false;
anyValue = 1;

console.log(anyValue); // 1



let myVar: unknown = 111;

function hasName(obj: any): obj is { name: string }{
    return !!obj &&
    typeof obj === "object"
    && "name" in obj
}

if (hasName(myVar)) {
    console.log(myVar.name);
}
// (myVar as string).toLowerCase();


// When any value is not assigned, its type is any
let a;
a = true;
a = 52;

// When a value is assigned, it's type can not be changed
let b = true;
// b = 5;  // Not valid


let multiType: number | boolean;
multiType = true;
multiType = 123;
// multiType = "m";  // Not valid

let anyType: any;
anyType = true;
anyType = 123;
anyType = "m";


// Functions - optional/default parameters - return type
// default parameter is like optional parameter
// function mySum(num1: number, num2?: number): number {
function mySum(num1: number, num2: number = 5): number {
    if(num2) return num1 + num2;
    else return num1
}
console.log(mySum(2, 10)); // 12
console.log(mySum(2)); // 7

// Objects
function myObj(obj: {name: string, age: number, isDeveloper: boolean}) {
    return `${obj.name} - ${obj.age} - ${obj.isDeveloper}`;
}

let me = {
    name: "Mostafa",
    age: 29,
    isDeveloper: true
}

console.log(myObj(me));

// To solve this difficult maintanence in function parameter, use interface in typescript
interface Person {
    name: string;
    age?: number;
    profession: string;
}

function myBio(person: Person){
    return `${person.name} - ${person.age ? person.age : "N/A"} - ${person.profession}`;
}

let m = {
    name: "Mostafa",
    // age: 29,
    profession: "Developer"
}
console.log(myBio(m))


// Classess
class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

const employee1 = new Employee("Mostafa");
console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    distributeTask(){
        console.log(`Manager distributing tasks`);
    }
}

let manager1 = new Manager("Shams");
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