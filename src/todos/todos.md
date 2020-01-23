
<link href="../style.css" rel="stylesheet"></link> 

# <span class="title-1 b-300">Todos Project</span>
we will create a todo item list which will show logs in console.

Create a class <span class="text italic sz-300">TodoItem.ts</span> inside <span class="text">src </span> directory 
add following code 
```ts
export class TodoItem{
	public id: number;
	public task: string;
	public isComplete: boolean = false

	constructor(id: number, task: string, complete: boolean =false){
		this.id = id
		this.task= task
		this.isComplete = complete
	}

	public printDetaile(): void {
		console.log(`${this.id}\t ${this.task} ${this.isComplete ? "\t(complete)" : "" }`)
	}
	
}
```
Now inside <span class="text">index.ts </span> write following code
```ts
import {TodoItem} from './TodoItem'
var todo = new TodoItem(1, 'Learn Typescript ', true)
todo.printDetaile()
```
you will see following result in shell or console
```shell
1	 Learn Typescript  	(complete)
```


Create another class <span class="text italic sz-300">TodoCollection.ts</span> inside <span class="text">src </span> directory 

```js
import {TodoItem} from './TodoItem'

export class TodoCollection {
	private nextId: number = 1;

	constructor(public userName: string, public todoItems: TodoItem[] = []){
		// no statment required
	}

	addTodo(task: string): number {
		while(this.getTodoById(this.nextId)){
			this.nextId++;
		}
		this.todoItems.push(new TodoItem(this.nextId, task))
		return this.nextId
	}

	getTodoById(id:number): TodoItem {
		return this.todoItems.find(item=> item.id === id)
	}
	markCompleted(id: number, complete: boolean) {
		const todoItem = this.getTodoById(id)
		if(todoItem){
			todoItem.complete = complete
		}
	}
}
```

Update  <span class="text italic sz-300">index.ts</span> inside <span class="text">src </span> directory.
```js
import {TodoItem} from './TodoItem'
import {TodoCollection} from './TodoCollection'


let todos= [
	new TodoItem(1, "Buy Flowers1"),new TodoItem(1, "purchase showes1"),
	new TodoItem(2, "Buy Flowers2"),new TodoItem(1, "purchase showes2"),
	new TodoItem(3, "Buy Flowers3"),new TodoItem(1, "purchase showes3"),
	new TodoItem(4, "Buy Flowers4"),new TodoItem(1, "purchase showes4"),
]

let collection = new TodoCollection("Adam", todos)
console.log(JSON.stringify(collection)) 
console.clear()
console.log( `${collection.userName}'s Todo List`)

let newId = collection.addTodo("Buy Flowers1")
let todoitem = collection.getTodoById(newId)
console.log(JSON.stringify(todoitem)) 
todoitem.printDetaile()
```

you will see output like this

this is json response and pretified using [Json Formater & validator](https://jsonformatter.curiousconcept.com/)
```json
{
   "userName":"Adam",
   "todoItems":[
      {
         "complete":false,
         "id":1,
         "task":"Buy Flowers1"
      
},
      {
         "complete":false,
         "id":1,
         "task":"purchase showes1"
      
},
      {
         "complete":false,
         "id":2,
         "task":"Buy Flowers2"
      
},
      {
         "complete":false,
         "id":1,
         "task":"purchase showes2"
      
},
      {
         "complete":false,
         "id":3,
         "task":"Buy Flowers3"
      
},
      {
         "complete":false,
         "id":1,
         "task":"purchase showes3"
      
},
      {
         "complete":false,
         "id":4,
         "task":"Buy Flowers4"
      
},
      {
         "complete":false,
         "id":1,
         "task":"purchase showes4"
      
}
   
],
   "nextId":1
}
```

Adam's Todo List
```json
{"complete":false,"id":5,"task":"Buy Flowers1"}
```
```shell
5	 Buy Flowers1
```

### <span class="title-3 b-300">Project Structure </span>
