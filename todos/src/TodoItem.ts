export class TodoItem{
	public id: number;
	public task: string;
	public isComplete: boolean = false

	constructor(id: number, task: string, complete: boolean =false){
		this.id = id
		this.task= task
		this.isComplete = complete
	}

	public printDetaile(): void {
		console.log(`${this.id}\t ${this.task} ${this.isComplete ? "\t(complete)" : "" }`)
	}
	
}