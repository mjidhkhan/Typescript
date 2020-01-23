import {Colors} from './Colors';
export class TodoItem{
	public id: number;
	public task: string;
	public complete: boolean = false


	constructor(id: number, task: string, complete: boolean =false){
		this.id = id
		this.task= task
		this.complete = complete
	}

	public printDetaile(): void {
		var gui= new Colors().gui();
		console.log(`${gui[1]}${gui.FgMagenta}${this.id} ${this.complete ? 	gui.FgGreen+"\t"+ this.task +"\t✓\t"+gui["Reset"] : gui.FgRed+"\t"+  this.task +"\tx\t"+gui["Reset"]}`)
		
	}
	
}