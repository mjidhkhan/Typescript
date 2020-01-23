"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = require("./Colors");
class TodoItem {
    constructor(id, task, complete = false) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetaile() {
        var gui = new Colors_1.Colors().gui();
        console.log(`${gui[1]}${gui.FgMagenta}${this.id} ${this.complete ? gui.FgGreen + "\t" + this.task + "\t✓\t" + gui["Reset"] : gui.FgRed + "\t" + this.task + "\tx\t" + gui["Reset"]}`);
    }
}
exports.TodoItem = TodoItem;
