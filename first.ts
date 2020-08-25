// interface Shape {
//     name: string,
//     width: number,
//     height: number,
//     color?: string
// }
// function area(shape: Shape) {
//     let areas = shape.width * shape.height
//     return 'shape is ' + shape.name + 'have ' + areas 
// }
// console.log(area({name: 'rect', width: 20, height: 20, color: 'red'}))
// console.log(area({name: 'trig', width: 10, height: 10}))
// function getName(person: string) {
//     return 'hello-' + person
// }

// let user = 'test'
// document.body.innerHTML = getName('user')
// console.log('hello world')
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);
let someValue: any = "this is a string";
someValue = [1, 2, 3]

let strLength: number = (someValue as string).length;
let str: number = (<string>someValue).length;
console.log(strLength)

let zz: number [] = [1,2 ,3]
let bb:Array<number> = [1]
let cc:Array<string> = ['1', '2']