
// Togather with type Aliases and union Types you get a enum like  behaviour.

type Species = "cat" | "dog" | "bird"


// String Literal Types can be used to distinguish overloads.

interface Pet {
	species: Species
	name:string
	eat(): any
	walk() : any
	sleep(): any
}
interface Cat  extends Pet{
	species: "cat"
}
interface Dog  extends Pet{
	species: "dog"
}
interface Bird  extends Pet {
	species: "bird"
	sings(): any
}

function buyPet(pet: Species, name: string ): Pet
function buyPet(pet: "cat", name: string ): Cat
function buyPet(pet: "dog", name: string ): Dog
function buyPet(pet: "bird", name: string ): Bird

function buyPet(pet: Species, name: string ): Pet {
	console.log('----------------------')
	if(pet === "cat"){
		return {
			species: "cat",
			name: name,
			eat:function(){
				console.log(` ${this.name} eats`)
			},
			walk: function (){
				console.log(` ${this.name} walks`)
			},
			sleep: function(){
				console.log(` ${this.name} sleeps`)
			}
		} as Cat  // type Cat
	}else if(pet === "dog"){  
		return {
			species: "dog",
			name: name,
			eat: function () {
				console.log(` ${this.name} eats`)
			},
			walk: function (){
				console.log(` ${this.name} walks`)
			},
			sleep: function(){
				console.log(` ${this.name} sleeps`)
			}
		} as Dog // type Dog

	}else if(pet === "bird"){
		return {
			species: "bird",
			name: name,
			eat: function(){
				console.log(` ${this.name} eats`)
			},
			walk: function (){
				console.log(` ${this.name} walks`)
			},
			sleep: function(){
				console.log(` ${this.name} sleeps`)
			},
			sings: function(){
				console.log(` ${this.name} sings`)
			}
		} as Bird // type Bird
	}else{
		throw ` Sorry we do not have a ${pet}. Would you like to buy a dog.`
	}
} // function end


function petIsCat(pet: Pet): pet is Cat
{
	return pet.species === "cat"
}

function petIsDog(pet: Pet): pet is Dog
{
	return pet.species === "dog"
}

function petIsBird(pet: Pet): pet is Bird
{
	return pet.species === "bird"
}

function palyWithPet(pet: Pet) {
	console.log(`Hey ${pet.name}, lets play.`)

	if(petIsCat(pet) || petIsDog(pet) || petIsBird(pet))
	{
		pet.eat()
		pet.walk()
		pet.sleep()
		if(petIsBird(pet)){
			pet.sings()
		}
	}
	
}


/// Usage 

// Dog

let dog = buyPet('dog' , "Rocky")
palyWithPet(dog);

// Bird

let bPet = buyPet('bird', 'quail')
palyWithPet(bPet)

// Cat

let cPet = buyPet('cat', 'Kitty')
palyWithPet(cPet)

