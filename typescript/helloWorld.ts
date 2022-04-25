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

// //function that returns value
// function AddValue(a:number, b:number):number
// {
//     let result = a+b;
//     return result;
   
// }

// let result = AddValue(5,6);
// console.log(`Result is ${result}`);
// //---------------------

// //function that returns value alternate method
// let AddValue2 = function(a:number, b:number):number
// {
//     let result = a+b;
//     return result;
   
// }

// let result2 = AddValue2(5,6)

// class Employee {
//     readonly name: string;
//     readonly age: number;
//     constructor(name1: string, age1: number) {
//         this.age = age1;
//         this.name = name1;
    
//     }
//     print (){
//         console.log(`${this.name} is ${this.age} years of age`)
//     }
// }

// let employeeObj = new Employee ("Ashkan", 30);
// // obj.name = "saeid";
// employeeObj.print();

// function printName(obj:Employee){
//     obj.print();
// }
// let employee = new Employee("Saeid", 57);
// printName(employee);



// class Calc{
//     x:number;
//     constructor(x:number){
//         this.x = x;
//     }
//     equation():number{
//         let equ = (this.x)**2 + this.x;
//         return equ;
//     }
// }

// function addOffset(calcObj:Calc, offset:number):number{
//     let equ = calcObj.equation() + offset;
//     return equ;
// }

// let calcObj = new Calc (3);
// let finalEquation = addOffset(calcObj, 5);
// console.log(finalEquation);


// function functionCalc(x:number):number{
//     let number = x**3 + x**2 + x + 10;
//     return number;
//     }
// let answer:number = functionCalc(2);
// console.log(answer);

// class Point{
//     x:number;
//     y:number;

//     constructor (x:number, y:number){
//         this.x=x;
//         this.y=y;

//     }
//     area():number{
//         let area=this.x * this.y;
//         return area;
//     }
    
// }

// let point = new Point(2,5);
// let area = point.area();
// console.log(area);


// function perimiter(x:number, y:number):number{
//    let perimiter = x+y;
//    return perimiter; 

// }

// let perm = perimiter (3,5);
// console.log(perm);


// class Calc {
//     static print(){
//         console.log("hello world");
//     }
// }

// Calc.print()

// let arrX = [1,2,3];
// let arrY = [4,5,6];
// for (let x of arrX){
//     for (let y of arrY){
//         console.log(x*y)
//     }
// }
   


class Point2D{
    x:number;
    y:number;

    constructor (x:number, y:number){
        this.x=x;
        this.y=y;

    }
    add2D():number{
        let add=this.x + this.y;
        return add;
    }
    
}

class Point3D extends Point2D {
    z:number;
    x:number;
    y:number;

    constructor (x:number, y:number, z:number){
        super(x,y);
        this.z=z;
    }
    add3D():number{
        let add=this.x + this.y + this.z;
        return add;
    }
}

let point3Dobj = new Point3D(10,20,30);
let result3D = point3Dobj.add3D();
let result2D = point3Dobj.add2D();

console.log(result3D);
console.log(result2D);


// let point2DObj = new Point2D(10,20);
// let result = point2DObj.add();
// console.log(result);
// point2DObj.x = 40;
// point2DObj.y = 50
// console.log(point2DObj.add());











// inheritence
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }
// class Point3D extends Point {
//   z: number;
//   constructor(x: number, y: number, z: number) {
//     super(x, y);
//     this.z = z;
//   }
//   add(point: Point3D) {
//     var point2D = super.add(point);
//     return new Point3D(point2D.x, point2D.y, this.z + point.z);
//   }
// }


