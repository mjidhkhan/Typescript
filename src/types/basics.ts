//Boolean
let isDone: 	boolean = false;
let isLogin: 	boolean;

// Number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

//String
let color: string = "blue"
color = 'red'

//Array
let list1: number[] = [1,2,3]
// Generic array
let list2:Array<number> = [1,2,3]

//Tuple
let x: [string, number]
x = ['hello', 10] // ok
//x = [10, 'hello'] // error

//Enum
enum Color {Red, Green, Blue}
let myColor: Color = Color.Green


enum Color2 {Red=1, Green=2, Blue=3}
let c: Color = Color.Green

enum Color3 {Red=1, Green, Blue}
let ColorName: String = Color[2]

//Any
let notSure: any = 4
notSure = "maybe a string"
notSure = false

let list: any[] = [1, true, "false"]
list [1] = 100

// void
function warnUser(): void { console.log("warned")}
let unusable:void = undefined
//unusable = null; // ok  if`--StrictNullChecks` is not given

// Null or Undefined
let u: undefined = undefined
let n: null  = null

// primitive Type annotations
const strName: string = 'John'
const heightInCentimeters: number = 18.88
const isActive: boolean = true

// array type annotation
const arrName: string[] = ['John','Nick', 'Rebecca', 'Lily']

// function type annotation with parameter type annotation
// and return type annotation.
let sayHello: (name: string) => string

// implementation of sayHello function
sayHello = function(name){
	return 'Hello'+ name
}

// Object type annotation
let person: {name: string, age: number}
// Implementation of a person object
person = {
	name: 'Mark',
	age: 25
}