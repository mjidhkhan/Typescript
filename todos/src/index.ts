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


	//var todo = new TodoItem(1, 'Learn Typescript ', false)
	//todo.printDetaile()
	
