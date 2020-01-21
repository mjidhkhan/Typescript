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
		return (this.todoItems as any).find((item: { id: number; }) => item.id === id)
	}
	markCompleted(id: number, complete: boolean) {
		const todoItem = this.getTodoById(id)
		if(todoItem){
			todoItem.complete = complete
		}
	}
}