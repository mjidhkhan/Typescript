<link href="style.css" rel="stylesheet"></link>

# <span class="title-1 st-400">Learning TypeScript</span>

## <span class="title-2 st-300">Get your enviornment ready</span>

For compiling and running typescript you need few things.

<ul>
<li>nodejs</li>
<li>git (optional)</li>
<li>npm (node package manger) or npx</li>
</ul>

### <span class="title-3 st-200">Installing node</span>

First download and install node if not installed already. 
[Download Nodejs](https://nodejs.org/en/)
Choose appropriate download according to your operating system.
(it will install npm as well)

#### <span class="title-4 st-200">check node and npm version</span>

```shell
$ node --version
$ npm --version
```

### <span class="title-3 st-300">Installing git</span>

macOSX has git installed by default so no need to install.
If you running windows then install <span class="text">git</span> 
from following location or by clicking [Git    ](https://git-scm.com) and follow instructions.

### <span class="title-3 st-300">Install a Programmer's Editor</span>

You can use notepad++ if you are using windows but best option is to 
install [vscode](https://code.visualstudio.com). Its corss platform and 
best editor for so many language and with hundreds of plugins available out of box.

### <span class="title-3 st-300">Installing TypeScript</span>

You can install Typescript globally or locally depends on your requirments. 
Globally installed TypeScript ca access form any where while locally installed 
TypeScript can access only from wit in directory it is installed.

#### <span class="title-4 st-200">Install globally </span>

```shell
$ npm install -g typescript
// osx or linux base systems
$ sudo npm install -g typescript
```

#### <span class="title-4 st-200">Install locally</span>

```shell
$ npm install typescript -D
// or
$ nom install typescript --save-dev
```

### <span class="title-3 st-300">Compiling code </span>

The <span class="text bold italic">tsc</span> compilsaation command comes 
with typescript, which can be use to compile code.

```shell
$ tsc my-code.ts
```

If you need to compile mulitple files the you need a  configuration file 
<span class="text">tsconfig.json</span>

### <span class="title-3 st-300">Creating TypeScript project</spanspan>

After installing nodejs and typescript globally.

create project directory .eg [todos](link of git)

```shell
$ mkdir todos
```

```shell
$ cd todos
```

while inside  todos directory  run following command

```shell
$ npm init -y
```

we used <span class="text">-y</span> to avoid all question which npm init commad will ask.

now open todo folder in your programmer's editor such as [vscode](https://code.visualstudio.com) 

now we need to create <span class="text">tsconfig.json</span> file to do so runn following commad.

```shell
$ tsc --init
```

creat <span class="text">src</span> directory
change following to match this

```json
// "outDir": "./",
// "rootDir": "./",
 "outDir": "./dist",
 "rootDir": "./src/*.ts", 
```

create <span class="text">index.ts</span> file in 
<span class="text">src</span> directory

```js
// src/index.ts
console.log('Hello Typescript!')
```

now we will compile files inside <span class="text">src</span> 
by running following command in shell

```shell
tsc
```

It will create <span class="text">dist </span> directory and compiled 
javascript file with name of <span class="text">index.js</span>

Now you ready to write Typescript.

<span class="text">[Note]: Dont modify files inside dist directory these 
will overriden when ever you run tsc command always modify ts files</span>

### <span class="title-3 st-300">Type Annotations</spanspan>

| <span class="all">Type</span> | <span class="all">Variable</span> |     |       |     |       | <span class="all">Description </span> |
| ----------------------------- | --------------------------------- | --- | ----- | --- | ----- | ------------------------------------- |
| const                         | identifier                        | =   | value |     |       | // infered                            |
| const                         | identifier                        | :   | type  |     |       | // explicite                          |
| const                         | identifier                        | :   | type  | =   | value | // explicite with default value       |

<div class="out-box">
 <span class="box"> const</span> 
 <span class="box gray">identifier</span> 
 <span class="box">=</span> 
 <span class="box gray">value</span>
 </div>
 <div class="out-box">
 <span class="box"> const</span> 
 <span class="box gray">identifier</span> 
 <span class="box">:</span> 
 <span class="box gray">type</span>
 </div>
 <div class="out-box">
 <span class="box"> const</span> 
 <span class="box gray">identifier</span> 
 <span class="box">:</span> 
 <span class="box gray">type</span>
 <span class="box">=</span>
 <span class="box gray">value</span>
 </div>

```js
// File: src/types/basics.ts
//Boolean
let isDone:     boolean = false;
let isLogin:     boolean;

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
```

By default <span class="text">null</span> and <span class="text">undefined</span> 
are subtypes of all other types. That means you can assign <span class="text">null</span> 
and <span class="text">undefined</span> to something like number.

However, when using the <span class="text">--strictNullChecks</span> flag, 
<span class="text">null</span> and <span class="text">undefined</span> 
are only assignable to any and their respective types (the one exception being 
that undefined is also assignable to void). This helps avoid many common errors. 
In cases where you want to pass in either a string or <span class="text">null</span> 
or <span class="text">undefined</span>, 

you can use the union type string | <span class="text">null</span> | <span class="text">undefined</span>.

we encourage the use of <span class="text">--strictNullChecks</span> when possible, 
but for the purposes of this handbook, we will assume it is turned off.

If a type is too complex you can create abd <span class="text  italic"> Inferface</span> 
or <span class="text  italic"> type alias</span> to simplify annotation.

```ts
// File: src/types/person.ts
// Interface
interface IPerson {
    name: string,
    age: number
}

const sherlock: IPerson = { name: 'John', age: 25}

// Type alias
type TPerson = {
    name: string
    age: number
}
const john: TPerson = {name: 'Martin', age: 30}
```

```js
// Never
// Represents type of value that never occured.
// Function returning neve must have unreachable end point
function error(message: string): never {
    throw new Error(message)
}
function infiniteLoop(): never {
    while(true){

    }
}

// Infered return type is never
function faile(){
    return error('somthing failed')
}

// Object
// type that represent non-primitive type
declare function create(0: object | null ): void
create({prop: 0}) //ok
create(null) //ok
create(42) //error
create('String') // error
create(false) // Error
create(undefined) // Error
```

### <span class="title-3 st-300">Type assertions </span>

Sometimes you’ll end up in a situation where you’ll know more about a 
value than TypeScript does. Usually this will happen when you know the 
type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler <span class="text"> trust me, 
I know what I’m doing.</span> A type assertion is like a type cast in other languages, 
but performs no special checking or restructuring of data. It has no runtime impact, 
and is used purely by the compiler. TypeScript assumes that you, the programmer, 
have performed any special checks that you need.

Type assertions have two forms. One is the <span class="text">angle-bracket<span class="text"> syntax:

```js
let someValue: any = "this is string"
let strLength: number = (<string>someValue).length
```

And the other is the <span class="text">as<span class="text"> -syntax

```js
let someValur = " another string"
let strLength: number (someValue as string).length
```

The two samples are equivalent. Using one over the other is mostly a choice of preference; 
however, when using TypeScript with <span class="text">JSX<span class="text">, 
only <span class="text">as-style<span class="text"> assertions are allowed

### <span class="title-3 st-300">Variable declaration</span>

simplest form of creating vasriable in javascript is using word <span class="text">var<span class="text">

```js
var a = 10
var b = 13
var c = a + b
```

<span class="text">let</span> and <span class="text"> const </span> are two relatively 
new types of variable declarations in JavaScript.

<span style="color:##d3077d">let</span> is similar

### <span class="title-3 st-300">Object & Dynamic Types</span>

Everything that is not primitive type in <span class="text italic">TypeScript</span> 
is a <span class="text italic"> subclass </span> of the <span class="text italic"> object  </span>type.
Dynamic types can be represent any type. When using dynamic types there is not 
compiler type checking for the type.

### <span class="title-3 st-300">Enumerations</span>

Enumerations are one of the simplest narrowing types.

```ts
enum TVehicle {
    PedalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry
}
const type = TVehical.Lorry
const typeName = TVehical[type] // Lorry
```

### <span class="title-3 st-300">Constant Enumerations</span>

A constant enumeration can be created using the key word 
<span class="text italic">const</span>,
Unlike normal enumeration, a constant enumeration is erased 
during compilation and all code reffering to
is replaced with <span class="text italic">hard-coded</span> values.

```ts
const enum TVehicle {
    PedalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry
}
const type = TVehical.Lorry
```

### <span class="title-3 st-300">String Literal Types</span>

### <span class="title-3 st-300">Watch for changes</spanspan>

add following in <span class="text">package.json</span> file

```json
"build": "tsc --watch"
```

then run following command

```shell
$ npm run build
```

Trick
```js
// trick.js
trick=() => [1,2,4,8,16,32]
	.map(n => (g=i => i<63? g(++i,i&n? m[y%6]=[...m[y++%6] ||[],i]:0):m)(y=m=[]))
console.log(trick())
```
