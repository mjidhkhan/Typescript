"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./todos/TodoItem");
const TodoCollection_1 = require("./todos/TodoCollection");
let todos = [
    new TodoItem_1.TodoItem(1, "Buy Bread", true), new TodoItem_1.TodoItem(2, "Buy Juice", true),
    new TodoItem_1.TodoItem(3, "Buy Milk", false), new TodoItem_1.TodoItem(4, "Buy Tea bags", false),
    new TodoItem_1.TodoItem(5, "Buy Oranges", true), new TodoItem_1.TodoItem(6, "Buy Icecream", true),
    new TodoItem_1.TodoItem(7, "Buy Mangoes", true), new TodoItem_1.TodoItem(8, "Buy Chicken", false),
];
console.clear();
let collection = new TodoCollection_1.TodoCollection("Adam", todos);
console.log(`${collection.userName}'s Todo List `
    + ` (${collection.getItemCounts().incomplete} items to do)`
    + `\n---------------------------------`);
// print todo's
collection.getTodoItems(true)
    .forEach(item => item.printDetaile());
