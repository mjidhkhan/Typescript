<style>

.text {color:#d3077d; font-weight:500; font-style:italic }
.bold {font-weight: 500}
.italic {font-style: italic;}
.title-1{color:#83044d}
.title-2{color:#a21767}
.title-3{color:#ae05a4}
.title-4{color: #d51fbc}
.title-5{color:#8d0654}
</style>

# <span class="title-1">Learning TypeScript</span>

## <span class="title-2">Get your enviornment ready</span>
For compiling and running typescript you need few things.
<ul>
<li>nodejs</li>
<li>git (optional)</li>
<li>npm (node package manger) or npx</li>
</ul>

### <span class="title-3">Installing node</span>
First download and install node if not installed already. [Download Nodejs](https://nodejs.org/en/)
Choose appropriate download according to your operating system.
(it will install npm as well)
#### <span class="title-4">check node and npm version</span>
```shell
$ node --version
$ npm --version
```

### <span class="title-3">Installing git</span>
macOSX has git installed by default so no need to install.
If you running windows then install <span class="text">git</span> from following location or by clicking [Git	](https://git-scm.com) abd follow instructions.

### <span class="title-3">Install a Programmer's Editor</span>
You can use notepad++ if you are using windows but best option is to install [vscode](https://code.visualstudio.com). Its corss platform and best editor for so many language and with hundreds of plugins available out of box.

### <span class="title-3">Installing TypeScript</span>
You can install Typescript globally or locally depends on your requirments. Globally installed TypeScript ca access form any where while locally installed TypeScript can access only from wit in directory it is installed.

#### <span class="title-4">Install globally </span>
```shell
$ npm install -g typescript
// osx or linux base systems
$ sudo npm install -g typescript
```
#### <span class="title-4">Install locally</span>
```shell
$ npm install typescript -D
// or
$ nom install typescript --save-dev
```
### <span class="title-3">Compiling code </span>
The <span class="text bold italic">tsc</span> compilsaation command comes with typescript, which can be use to compile code.
```shell
$ tsc my-code.ts
```
If you need to compile mulitple files the you need a  configuration file <span class="text">tsconfig.json</span>

### <span class="title-3">Creating TypeScript project</spanspan>
After installing nodejs and typescript globally.

create project directory .eg [todos](link of git)
``` shell
$ mkdir todos
```
``` shell
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
creat <span class="text">src<span class="text"> directory
change following to match this
```json
// "outDir": "./",
// "rootDir": "./",
 "outDir": "./dist",
 "rootDir": "./src", 
```
create <span class="text">index.ts</span> file in <span class="text">src</span> directory
```js
// src/index.ts
console.log('Hello Typescript!')
```
now we will compile files inside <span class="text">src</span> by running following command in shell
```shell
tsc
```
It will create <span class="text">dist </span> directory and compiled javascript file with name of <span class="text">index.js</span>

Now you ready to write Typescript.

<span class="text">[Note]: Dont modify files inside dist directory these will overriden when ever you run tsc command always modify ts files</span>

## <span class="title-2">TypeScript Basics</spanspan>


### <span class="title-3">Type Annotations</spanspan>

|type   | variable|      |      |   |       |    Description                      |
|-------|------------|---|------|---|-------|-------------------------------------|
| const | identifier | = | value|   |       | 	// infered						  |
| const | identifier | : | type |	|		|    // explicite					  |
| const | identifier | : | type | = | value | 	// explicite with default value	  |


``` js
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
let list: number[] = [1,2,3]
// Generic array
let list:Array<number> = [1,2,3]

//Tuple
let x: [string, number]
x = ['hello', 10] // ok
x = [10, 'hello'] // error

//Enum
enum Color {Red, Green, Blue}
let c: Color = Coloe.green

enum Color {Red=1, Green=2, Blue=3}
let c: Color = Color.Green

enum Color {Red=1, Green, Blue}
let ColorName: String = Color[2]

//Any
let notSure: any = 4
notSure = "maybe a string"
notSure = fasle

let list: any[] = [1, true, "false"]
list [1] = 100

// void
function warnUser(): void { console.log("warned")}
let unusable:vod = undefined
unusable = null; // ok  if`--StrictNullChecks` is not given

// Null or Undefined
let u: undefined = undefined
let n: null  = null
```
By default <span class="text">null</span> and <span class="text">undefined</span> are subtypes of all other types. That means you can assign <span class="text">null</span> and <span class="text">undefined</span> to something like number.

However, when using the <span class="text">--strictNullChecks</span> flag, <span class="text">null</span> and <span class="text">undefined</span> are only assignable to any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or <span class="text">null</span> or <span class="text">undefined</span>, 

you can use the union type string | <span class="text">null</span> | <span class="text">undefined</span>.

we encourage the use of <span class="text">--strictNullChecks</span> when possible, but for the purposes of this handbook, we will assume it is turned off.

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

### <span class="title-3">Type assertions </span>
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler <span class="text"> trust me, I know what I’m doing.</span> A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

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
The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with <span class="text">JSX<span class="text">, only <span class="text">as-style<span class="text"> assertions are allowed

### <span class="title-3">Variable declaration</span>

simplest form of creating vasriable in javascript is using word <span class="text">var<span class="text">
```js
var a = 10
var b = 13
var c = a + b
```
 
<span class="text">let</span> and <span class="text"> const </span> are two relatively new types of variable declarations in JavaScript.

<span style="color:##d3077d">let</span> is similar