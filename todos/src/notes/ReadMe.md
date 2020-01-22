
<link href="../../../style.css" rel="stylesheet"></link> 

# <span class="title-1 sz-400">Learning TypeScript</span>

## <span class="title-2 sz-300">Get your enviornment ready</span>
For compiling and running typescript you need few things.
<ul>
<li>nodejs</li>
<li>git (optional)</li>
<li>npm (node package manger) or npx</li>
</ul>

### <span class="title-3 sz-200">Installing node</span>
First download and install node if not installed already. 
[Download Nodejs](https://nodejs.org/en/)
Choose appropriate download according to your operating system.
(it will install npm as well)
#### <span class="title-4 sz-200">check node and npm version</span>
```shell
$ node --version
$ npm --version
```

### <span class="title-3 sz-300">Installing git</span>
macOSX has git installed by default so no need to install.
If you running windows then install <span class="text">git</span> 
from following location or by clicking [Git	](https://git-scm.com) and follow instructions.

### <span class="title-3 sz-300">Install a Programmer's Editor</span>
You can use notepad++ if you are using windows but best option is to 
install [vscode](https://code.visualstudio.com). Its corss platform and 
best editor for so many language and with hundreds of plugins available out of box.

### <span class="title-3 sz-300">Installing TypeScript</span>
You can install Typescript globally or locally depends on your requirments. 
Globally installed TypeScript ca access form any where while locally installed 
TypeScript can access only from wit in directory it is installed.

#### <span class="title-4 sz-200">Install globally </span>
```shell
$ npm install -g typescript
// osx or linux base systems
$ sudo npm install -g typescript
```
#### <span class="title-4 sz-200">Install locally</span>
```shell
$ npm install typescript -D
// or
$ nom install typescript --save-dev
```
### <span class="title-3 sz-300">Compiling code </span>
The <span class="text bold italic">tsc</span> compilsaation command comes 
with typescript, which can be use to compile code.
```shell
$ tsc my-code.ts
```
If you need to compile mulitple files the you need a  configuration file 
<span class="text">tsconfig.json</span>

### <span class="title-3 sz-300">Creating TypeScript project</spanspan>
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



### <span class="title-3 sz-300">Watch for changes</spanspan>
add following in <span class="text">package.json</span> file
```json
"build": "tsc --watch"
```
then run following command
```shell
$ npm run build
```

### <span class="title-3 sz-300">Running TypeScript using ts-node</span>
<span class="text italic">ts-node</span> is an npm package which allows the user to run typescript files directly, without the needs for precompilation using tsc. It also provide [REPL](http://en.wikipedia.org/wiki/Read-eval-print_loop)

Install <span class="text italic">ts-node</span> <span class="text italic">globally</span> using
```shell 
$ npm install -g ts-node
```
<span class="text italic">ts-node</span> does not bundle <span class="text italic">TypeScript</span> compiler, so you might need to install it.
```shell
$ install -g typescript
```

#### <span class="title-4 sz-300">Execute script</span>
```shell
$ ts-node main.ts
```

#### <span class="title-4 sz-400">Running REPL</span>
```shell
$ ts-node
```
It will open REPL to execute 

### <span class="title-3 sz-500">TypeScript REPL in Node.js</span>
For use Typescript <span class="text">REPL</span> in <span class="text">Node.js</span> [tsun package](https://www.npmjs.com/package/tsun) can be used.
```shell
$ npm install -g tsun

// use tsun
$ tsun

```

### <span class="title-3 sz-500">TypeScript Core Types</span>



#### <span class="title-3 sz-500"> 	1-	String Literal Types</span>
String Literal types allow you to specify the exact value a string can have.
```ts

// Togather with type Aliases and union Types you get a enum like  behaviour.

type Species = "cat" | "dog" | "bird"


// String Literal Types can be used to distinguish overloads.

interface Pet {
	species: Species
	name:string
	eat(): any
	walk() : any
	sleep(): any
}
interface Cat  extends Pet{
	species: "cat"
}
interface Dog  extends Pet{
	species: "dog"
}
interface Bird  extends Pet {
	species: "bird"
	sings(): any
}

function buyPet(pet: Species, name: string ): Pet
function buyPet(pet: "cat", name: string ): Cat
function buyPet(pet: "dog", name: string ): Dog
function buyPet(pet: "bird", name: string ): Bird

function buyPet(pet: Species, name: string ): Pet {
	console.log('----------------------')
	if(pet === "cat"){
		return {
			species: "cat",
			name: name,
			eat:function(){
				console.log(` ${this.name} eats`)
			},
			walk: function (){
				console.log(` ${this.name} walks`)
			},
			sleep: function(){
				console.log(` ${this.name} sleeps`)
			}
		} as Cat  // type Cat
	}else if(pet === "dog"){  
		return {
			species: "dog",
			name: name,
			eat: function () {
				console.log(` ${this.name} eats`)
			},
			walk: function (){
				console.log(` ${this.name} walks`)
			},
			sleep: function(){
				console.log(` ${this.name} sleeps`)
			}
		} as Dog // type Dog

	}else if(pet === "bird"){
		return {
			species: "bird",
			name: name,
			eat: function(){
				console.log(` ${this.name} eats`)
			},
			walk: function (){
				console.log(` ${this.name} walks`)
			},
			sleep: function(){
				console.log(` ${this.name} sleeps`)
			},
			sings: function(){
				console.log(` ${this.name} sings`)
			}
		} as Bird // type Bird
	}else{
		throw ` Sorry we do not have a ${pet}. Would you like to buy a dog.`
	}
} // function end


function petIsCat(pet: Pet): pet is Cat
{
	return pet.species === "cat"
}

function petIsDog(pet: Pet): pet is Dog
{
	return pet.species === "dog"
}

function petIsBird(pet: Pet): pet is Bird
{
	return pet.species === "bird"
}

function palyWithPet(pet: Pet) {
	console.log(`Hey ${pet.name}, lets play.`)

	if(petIsCat(pet) || petIsDog(pet) || petIsBird(pet))
	{
		pet.eat()
		pet.walk()
		pet.sleep()
		if(petIsBird(pet)){
			pet.sings()
		}
	}
	
}


/// Usage 

// Dog

let dog = buyPet('dog' , "Rocky")
palyWithPet(dog);

// Bird

let bPet = buyPet('bird', 'quail')
palyWithPet(bPet)

// Cat

let cPet = buyPet('cat', 'Kitty')
palyWithPet(cPet)


```


