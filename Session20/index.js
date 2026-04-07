// console.log("Hello World!");

//[SECTION] Array
//An array is also a storage for multiple elements/values
// The best practice is values/elements stored in an array should be of the same data type.

let pokemon = ["pikachu", "charmander", "squirtle"];
console.log(pokemon);

console.log(pokemon[0]);
console.log(pokemon[2]);

console.log(`My favorite pokemon is ${pokemon[0]}.`);

console.log(`My favorite pokemon is ${pokemon[0].toLocaleUpperCase()}.`);

//get the length of an array
console.log(pokemon.length);

//Accessing an index that is not existing will result -> undefined
console.log(pokemon[5]);

// Array Mutation
// Modifying Array Elements

pokemon[3] = "bulbasaur";

console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Charmeleon";

console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Mew";
console.log(pokemon);
console.log(pokemon.length);

//Add an element on the tail of an array without knowing the actual index number.

console.log(pokemon.length);
pokemon[pokemon.length] = "snorlax";

console.log(pokemon);
console.log(pokemon.length);

//access the last element on the array
console.log(pokemon[pokemon.length - 1]);