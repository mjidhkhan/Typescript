import {TodoItem} from './TodoItem'
type ItemCounts = {
	total: number,
	incomplete: number
	
}
export class TodoCollection {
	private nextId: number = 1;
	private itemMap = new Map<number, TodoItem>()

	constructor(public userName: string, public todoItems: TodoItem[] = []){
		todoItems.forEach(item => this.itemMap.set(item.id, item))
	}

	addTodo(task: string): number {
		while(this.getTodoById(this.nextId)){
			this.nextId++;
		}
		this.itemMap.set(this.nextId, new TodoItem(this.nextId, task))
		return this.nextId
		//this.todoItems.push(new TodoItem(this.nextId, task))
	}

	getTodoById(id: number):any{
		return this.itemMap.get(id)
		//return (this.todoItems as any).find((item: { id: number; }) => item.id === id)
	}
 
	getTodoItems(includeComplete: boolean): TodoItem[]{
		return [...this.itemMap.values()]
			.filter(item => includeComplete || !item.complete)
			
	}
	markCompleted(id: number, complete: boolean) {
		const todoItem = this.getTodoById(id)
		if(todoItem){
			todoItem.complete = complete
		}
	}

	removeComplete(){
		this.itemMap.forEach(item => {
			if(item.complete){
				this.itemMap.delete(item.id)
			}
		})
	}

	getItemCounts():ItemCounts{
		return {
			total: this.itemMap.size,
			incomplete: this.getTodoItems(false).length,
			
		}
	}
}