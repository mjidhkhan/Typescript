"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    function TodoItem(id, task, complete) {
        if (complete === void 0) { complete = false; }
        this.isComplete = false;
        this.id = id;
        this.task = task;
        this.isComplete = complete;
    }
    TodoItem.prototype.printDetaile = function () {
        console.log(this.id + "\t " + this.task + " " + (this.isComplete ? "\t(complete)" : ""));
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
