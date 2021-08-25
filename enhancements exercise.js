function createInstructor(firstName, lastName){
    return {
        firstName, 
        lastName
    }
}

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt"
  [favoriteNumber] = "That is my favorite!"
}

let instructor = {
    firstName: "Trevor",
    sayHi:()=>{
        return "hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}


const dog = createAnimal ("dog","bark","woof")

const sheep = createAnimal ("sheep","bleet","baaa")

function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}

