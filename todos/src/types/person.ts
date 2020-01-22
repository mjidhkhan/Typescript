// Interface
interface IPerson {
	name: string,
	age: number
}

const sherlock: IPerson = { name: 'John', age: 25}
 console.log(sherlock)

// Type alias
type TPerson = {
	name: string
	age: number
}
const john: TPerson = {name: 'Martin', age: 30}
 console.log(john)