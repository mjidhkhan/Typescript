"use strict";
// Togather with type Aliases and union Types you get a enum like  behaviour.
function buyPet(pet, name) {
    console.log('----------------------');
    if (pet === "cat") {
        return {
            species: "cat",
            name: name,
            eat: function () {
                console.log(` ${this.name} eats`);
            },
            walk: function () {
                console.log(` ${this.name} walks`);
            },
            sleep: function () {
                console.log(` ${this.name} sleeps`);
            }
        }; // type Cat
    }
    else if (pet === "dog") {
        return {
            species: "dog",
            name: name,
            eat: function () {
                console.log(` ${this.name} eats`);
            },
            walk: function () {
                console.log(` ${this.name} walks`);
            },
            sleep: function () {
                console.log(` ${this.name} sleeps`);
            }
        }; // type Dog
    }
    else if (pet === "bird") {
        return {
            species: "bird",
            name: name,
            eat: function () {
                console.log(` ${this.name} eats`);
            },
            walk: function () {
                console.log(` ${this.name} walks`);
            },
            sleep: function () {
                console.log(` ${this.name} sleeps`);
            },
            sings: function () {
                console.log(` ${this.name} sings`);
            }
        }; // type Bird
    }
    else {
        throw ` Sorry we do not have a ${pet}. Would you like to buy a dog.`;
    }
} // function end
function petIsCat(pet) {
    return pet.species === "cat";
}
function petIsDog(pet) {
    return pet.species === "dog";
}
function petIsBird(pet) {
    return pet.species === "bird";
}
function palyWithPet(pet) {
    console.log(`Hey ${pet.name}, lets play.`);
    if (petIsCat(pet) || petIsDog(pet) || petIsBird(pet)) {
        pet.eat();
        pet.walk();
        pet.sleep();
        if (petIsBird(pet)) {
            pet.sings();
        }
    }
}
/// Usage 
// Dog
let dog = buyPet('dog', "Rocky");
palyWithPet(dog);
// Bird
let bPet = buyPet('bird', 'quail');
palyWithPet(bPet);
// Cat
let cPet = buyPet('cat', 'Kitty');
palyWithPet(cPet);
