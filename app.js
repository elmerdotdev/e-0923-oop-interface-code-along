// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// let user1: Person;
// user1 = {
//   name: "John",
//   age: 30,
//   greet(phrase: string) {
//     console.log(`Hi I am ${this.name} and my age is ${this.age}. ${phrase}`)
//   }
// }
// user1.greet("How are you?")
// interface Greetable {
//   name: string;
//   greet(phrase: string): void;
// }
// class Dog implements Greetable {
//   name: string;
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age
//   }
//   greet(phrase: string): void {
//     console.log(`${phrase} ${this.name}`)
//   }
// }
// // initialize the class
// let dog1 = new Dog('Tommy', 50)
// interface Named {
//   readonly name: string;
// }
// interface Greetable extends Named {
//   greet(phrase: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age
//   }
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`)
//   }
// }
// let user1 = new Person('John', 30)
// user1.name = "Joe"
// user1.name = "Jonny"
// console.log(user1.name)
// interface Named {
//   readonly name?: string; // optional
//   outputName?: string; // optional
// }
// interface Greetable extends Named {
//   greet(phrase: string): void; // not optional
// }
// class Person implements Greetable {
//   name?: string
//   outputName?: string;
//   constructor(name?: string, outputName?: string) {
//     if (name) {
//       this.name = name
//     }
//     if (outputName) {
//       this.outputName = outputName
//     }
//   }
//   greet(phrase: string): void {
//     if (this.name) {
//       console.log(`${phrase} ${this.name}`)
//     }
//   }
// }
// let user1 = new Person('John', 'John')
// user1.greet("Hello!")
// YOU CANNOT SEE INTERFACES IN JS
// type Admin = {
//   name: string;
//   privileges: string[];
//   salary: number;
// }
// type Employee = {
//   name: string;
//   age: number;
//   hireData: Date;
// }
//type AdminEmployee = Admin & Employee;
// interface Admin {
//   name: string;
//   privileges: string[];
//   salary: number
// }
// interface Employee {
//   name: string;
//   age: number;
//   hireData: Date;
// }
// interface AdminEmployee extends Admin, Employee {}
// const employee1: AdminEmployee = {
//   name: "John",
//   privileges: ["create-server"],
//   age: 30,
//   hireData: new Date(),
//   salary: 100000
// }
// type Num = string | number
// type Str = number | boolean
// type NumStr = Num & Str // NumStr number
// let user1: NumStr
// user1 = 10
// type Combinable = string | number
// function add(num1: Combinable, num2: Combinable) {
//   // adding type guard
//   if (typeof num1 === "string" || typeof num2 === "string") {
//     return num1.toString() + num2.toString() // ex. '4', '5' = 45
//   } else {
//     return num1 + num2 // 4, 5 = 9
//   }
// }
// console.log(add(11, '12'))
// type Employee = {
//   name: string;
//   privileges: string[]
// }
// type Admin = {
//   name: string;
//   age: number
// }
// type UnknownEmployee = Employee | Admin
// function printEmployeeInfo(employee: UnknownEmployee) {
//   console.log(employee.name)
//   if ("privileges" in employee) {
//     console.log(employee.privileges)
//   }
//   if ("age" in employee) {
//     console.log(employee.age)
//   }
// }
// printEmployeeInfo({ name: "John", privileges: ['Eating',"Drinking"], age: 30 })
// class Car {
//   drive() {
//     console.log('driving...')
//   }
// }
// class Truck {
//   drive() {
//     console.log('driving a truck...')
//   }
//   loadCargo(amount: number) {
//     console.log(`loading cargo... ${amount}`)
//   }
// }
// type Vehicle = Car | Truck
// const vehicle1 = new Car()
// const vehicle2 = new Truck()
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100000)
//   }
// }
// useVehicle(vehicle2)
// interface Student {
//   readonly name: string,
//   readonly age: number
// }
// let student1: Student = {
//   name: 'Joe',
//   age: 20
// }
// student1.name = "John"
// student1.age = 25
// interface Bird {
//   type: 'bird',
//   flyingSpeed: number
// }
// interface Horse {
//   type: 'horse',
//   runningSpeed: number
// }
// type Animal = Bird | Horse
// function moveAnimal(animal: Animal) {
//   let speed;
//   if (animal.type == "bird") {
//     speed = animal.flyingSpeed
//   } else if (animal.type == "horse") {
//     speed = animal.runningSpeed
//   }
//   console.log(`Moving at ${speed}`)
// }
// moveAnimal({ type: 'horse', runningSpeed: 10 })
// interface ErrorContainer {
//   [prop: string]: string
// }
// const errorLog: ErrorContainer = {
//   email: 'Not a valid email',
//   username: "Not a valid username"
// }
// const users = [
//   {
//     id: 1,
//     name: "John",
//     job: {
//       title: "CEO",
//       jobDesc: {
//         job1: 'Command people',
//         job2: 'Get paid high salary'
//       }
//     }
//   },
//   {
//     id: 2,
//     name: "Joe",
//     job: {
//       title: "Employee",
//     }
//   }
// ]
// users.forEach(user => {
//   console.log(user.job.jobDesc?.job1)
// })
var username = null;
var websiteGreeting = 'Hello ' + (username !== null && username !== void 0 ? username : '');
console.log(websiteGreeting);
