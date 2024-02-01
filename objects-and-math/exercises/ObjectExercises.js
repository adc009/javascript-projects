let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.round(Math.random() * 10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.round(Math.random() * 10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.round(Math.random() * 10)}
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.round(Math.random() * 10)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.round(Math.random() * 10)}
};



let crew = [superChimpOne, salamander, superChimpTwo, doggo, tardigrade];

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

function fitnessTest(array) {
   let output = [];
   for (let i=0; i<array.length; i++) {
      let turns = 0;
      let dist = 0;
      while (dist < 20) {
         dist += array[i].move();
         turns ++;
      }
      output.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }

   return output;
}

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
let output = fitnessTest(crew);

for (let i=0; i<output.length; i++) {
   console.log(output[i]);
}