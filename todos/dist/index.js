"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem_1 = require("./TodoItem");
var TodoCollection_1 = require("./TodoCollection");
var todos = [
    new TodoItem_1.TodoItem(1, "Buy Flowers1"), new TodoItem_1.TodoItem(1, "purchase showes1"),
    new TodoItem_1.TodoItem(2, "Buy Flowers2"), new TodoItem_1.TodoItem(1, "purchase showes2"),
    new TodoItem_1.TodoItem(3, "Buy Flowers3"), new TodoItem_1.TodoItem(1, "purchase showes3"),
    new TodoItem_1.TodoItem(4, "Buy Flowers4"), new TodoItem_1.TodoItem(1, "purchase showes4"),
];
var collection = new TodoCollection_1.TodoCollection("Adam", todos);
console.log(JSON.stringify(collection));
console.clear();
console.log(collection.userName + "'s Todo List");
var newId = collection.addTodo("Buy Flowers1");
var todoitem = collection.getTodoById(newId);
console.log(JSON.stringify(todoitem));
todoitem.printDetaile();
//var todo = new TodoItem(1, 'Learn Typescript ', false)
//todo.printDetaile()
