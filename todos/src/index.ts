import {TodoItem} from './TodoItem'
import {TodoCollection} from './TodoCollection'


let todos= [
	new TodoItem(1, "Buy Bread" ,true),new TodoItem(2, "Buy Juice", true),
	new TodoItem(3, "Buy Milk" , false),new TodoItem(4, "Buy Tea bags", false),
	new TodoItem(5, "Buy Oranges", true),new TodoItem(6, "Buy Icecream", true),
	new TodoItem(7, "Buy Mangoes", true),new TodoItem(8, "Buy Chicken", false),
]

//console.clear()
let collection = new TodoCollection("Adam", todos)
let newId = collection.addTodo("Buy Lamb meet")
//let todoitem = collection.getTodoById(newId)
collection.getTodoItems(true)
	.forEach(item => item.printDetaile());
//console.log(JSON.stringify(collection)) 
//console.log( `${collection.userName}'s Todo List`)


//console.log(JSON.stringify(todoitem)) 

//todoitem.printDetaile()



	//var todo = new TodoItem(1, 'Learn Typescript ', false)
	//todo.printDetaile()
	
