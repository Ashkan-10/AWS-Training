// console.log("Hello World");
// let a = 2;
// console.log(a);
// // --------------------------------------------
// // if we add an item and accidentally skip an index, it will create an undefined item in the array.
// let seaCreatures = ["octopus", "squid", "shark", "seahorse", "starfish"];
// // seaCreatures[5] = "whale";
// // seaCreatures[6] = "fish";
// // seaCreatures[7] = "pufferfish";
// // console.log(seaCreatures);
// // console.log(seaCreatures[2]);
// // for (var item in seaCreatures) {
// //   console.log(item);
// // }
// // -----------------------push()-----------------------
// // append lobster to the end of the seaCreatures array
// seaCreatures.push("lobster");
// console.log(seaCreatures);
// //  -----------unShift()--------------
// // append dragonfish to the beginning of the seaCreatures array
// // seaCreatures.unshift("dragonfish");
// // console.log(seaCreatures);
// //------------------ pop()------------
// // remove the last item
// seaCreatures.pop();
// console.log(seaCreatures);
//--------------------------
//Define Variable
// let a = 8
// let b = 10
// let c = a + b
// console.log(c)
//---------------------
// let arr = [1,2,3,4,5];
// for (let i of arr)
// {
//     console.log(i);
// }
// let dic = {name:'ashkan', age: 29, fav:['red', 'blue']};
// console.log(dic['fav'][0]);
// console.log(dic['name'])
// for (let key in dic)
// {
//     console.log(dic[key])
// }
// let dic1 = {colour:'pink', size:[10,5]};
// console.log(dic1['size'])
// for (let h in dic1)
// {
//     console.log(dic1[h])
// }
// console.log(dic1['size'][0]);
// let arr2 = dic1['size']
// console.log (arr2)
//-----------------
// let a = 10, b = 40, c = 40;
// if (c>b) 
// {
//     console.log(c + ' is greater than ' + b);
//     console.log(`${c} is greater than ${b}`);
// }
// else if (b>c)
// {
//     console.log(`${b} is greater than ${c}`);
// }
// else
// {
//     console.log('no idea');
// }
//-------------------
// const msg = 'word';
// let a = 2;
// a = a+2;
//-------------------
// Void function - means no return value, use capital
// function Add()
// {
//     console.log('I add values');
// }
// Add();
//--------------------
// Function that accepts one value
// function Print(msg:string)
// {
//     console.log(`Hello ${msg}`);
// }
// Print('ashkan');
//-----------------------------
// function accepts multiple values
// function AddValue(a:number, b:number)
// {
//     console.log(`Result is ${a+b}`);
// }
// AddValue(5,6);
//-------------------------
//function that returns value
function AddValue(a, b) {
    var result = a + b;
    return result;
}
var result = AddValue(5, 6);
console.log("Result is ".concat(result));
