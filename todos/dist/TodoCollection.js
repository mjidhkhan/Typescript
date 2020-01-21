"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
        //this.todoItems.push(new TodoItem(this.nextId, task))
    }
    getTodoById(id) {
        //console.log(this.itemMap)
        return this.itemMap.get(id);
        //return (this.todoItems as any).find((item: { id: number; }) => item.id === id)
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || item.complete);
    }
    markCompleted(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
