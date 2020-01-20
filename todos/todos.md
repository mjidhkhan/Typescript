<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i|Open+Sans+Condensed:300&display=swap');
body{ color: #474647; }
.text {color:#d3077d; }
.all {color:#d3077d;}
.box { display:in-line; width:auto; height:20px;
	background:#eee; border: 1px solid #b0aeb0;padding:15px;
	color: #d3077d; }
.out-box { display:block; width:auto; height:auto;
			border: 1px solid #eee; margin:2px;
			padding-left:20px; padding-top:20px; padding-bottom:20px;}

.gray {color:#474647; font-weight: 300;font-style: italic; }
.sz-200 {font-weight: 200; font-family: 'Nunito Sans', sans-serif;}
.sz-300 {font-weight: 300; font-family: 'Nunito Sans', sans-serif;}
.sz-400 {font-weight: 400; font-family: 'Nunito Sans', sans-serif;}
.sz-500 {font-weight: 500; font-family: 'Nunito Sans', sans-serif;}
.sz-600 {font-weight: 600; font-family: 'Nunito Sans', sans-serif;}
.sz-700 {font-weight: 700; font-family: 'Nunito Sans', sans-serif;}
.sz-800 {font-weight: 800; font-family: 'Nunito Sans', sans-serif;}
.sz-900 {font-weight: 900; font-family: 'Nunito Sans', sans-serif;}

.italic {font-style: italic;}
.title-1{color:#83044d; }
.title-2{color:#a21767; }
.title-3{color:#ae05a4; }
.title-4{color:#d51fbc; }
.title-5{color:#8d0654; }
</style>

# <span class="title-1 b-300">Todos Project</span>
we will create a todo item list which will show logs in console.

Create a class <span class="text italic sz-300">TodoItem.ts</span> inside <span class="text">src </span> directory 
add following code 
```ts
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
```
Now inside <span class="text">index.ts </span> write following code
```ts
import {TodoItem} from './TodoItem'
var todo = new TodoItem(1, 'Learn Typescript ', true)
todo.printDetaile()
```
you will see following result in shell or console
```shell
1	 Learn Typescript  	(complete)
```





### <span class="title-3 b-300">Project Structure </span>