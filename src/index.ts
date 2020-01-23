import {TodoItem} from './todos/TodoItem'
import {TodoCollection} from './todos/TodoCollection'


let todos= [
	new TodoItem(1, "Buy Bread" ,true),new TodoItem(2, "Buy Juice", true),
	new TodoItem(3, "Buy Milk" , false),new TodoItem(4, "Buy Tea bags", false),
	new TodoItem(5, "Buy Oranges", true),new TodoItem(6, "Buy Icecream", true),
	new TodoItem(7, "Buy Mangoes", true),new TodoItem(8, "Buy Chicken", false),
]

console.clear()
let collection = new TodoCollection("Adam", todos)
console.log(`${collection.userName}'s Todo List `
			+ ` (${collection.getItemCounts().incomplete} items to do)`
			+ `\n---------------------------------`
			)

// print todo's
collection.getTodoItems(true)
	.forEach(item => item.printDetaile());

