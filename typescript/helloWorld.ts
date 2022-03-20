// console.log("Hello World");
// let a = 2;
// console.log(a);

// --------------------------------------------

// if we add an item and accidentally skip an index, it will create an undefined item in the array.
let seaCreatures = ["octopus", "squid", "shark", "seahorse", "starfish"];
// seaCreatures[5] = "whale";
// seaCreatures[6] = "fish";
// seaCreatures[7] = "pufferfish";
// console.log(seaCreatures);
// console.log(seaCreatures[2]);

// for (var item in seaCreatures) {
//   console.log(item);
// }

// -----------------------push()-----------------------
// append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");
console.log(seaCreatures);

//  -----------unShift()--------------
// append dragonfish to the beginning of the seaCreatures array
// seaCreatures.unshift("dragonfish");
// console.log(seaCreatures);

//------------------ pop()------------
// remove the last item
seaCreatures.pop();
console.log(seaCreatures);
