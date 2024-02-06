// 1. Create an interface named `Car` with the following properties:
// - `brand` of type string
// - `speed` of type number
// - `accelerate` which is a function that takes a number and increases the speed accordingly.

// 2. Implement the `Car` interface in a class named `SportsCar`. The `accelerate` function should log the acceleration.

interface Car {
  brand: string,
  speed: number,
  accelerate: (increase: number) => void
}

class SportsCar implements Car {
  brand: string
  speed: number

  constructor(brand: string, speed: number) {
    this.brand = brand
    this.speed = speed
  }

  accelerate(increase: number): void {
    this.speed += increase
    console.log(`This ${this.brand} increase its speed by ${increase}. The current speed is ${this.speed}`)
  }
}

const mySportsCar = new SportsCar('Lamborghini', 100)
mySportsCar.accelerate(50)
mySportsCar.accelerate(30)


// 1. Create a union type `Result` which can either be a string or an object with a `value` property of type number.

// 2. Implement a function `processResult` that takes a `Result` and logs the value if it's a number, or logs "Error" if it's a string.

// 3. Implement an intersection type `Engineer` which combines a `Person` and an `Employee`, where `Person` has `name` of type string, and `Employee` has `position` of type string.

type Result = string | { value: number }

function processResult(result: Result): void {
  if (typeof result === "string") {
    console.log("Error") // if its a string
  } else {
    console.log(result.value) // if its a number
  }
}

type Person = {
  name: string
}

type Employee = {
  position: string
}

type Engineer = Person & Employee

const engineer: Engineer = {
  name: 'John',
  position: 'Software Engineer'
}


// 1. Create an index signature interface `Dictionary` that allows an object to hold key-value pairs with keys of type string and values of type number.

// 2. Implement a function `getDictionaryValue` that takes a `Dictionary` and a key, and returns the value associated with that key or "Key not found" if the key doesn't exist.

// 3. Use type casting to convert a value of type `any` to a `string`.

interface Dictionary {
  [key: string]: number
}

function getDictionaryValue(dictionary: Dictionary, key: string): number | string {
  return dictionary.hasOwnProperty(key) ? dictionary[key] : 'Key not found'
}

const myDictionary: Dictionary = {
  "apples": 10,
  "bananas": 20,
  "oranges": 5
}

console.log(getDictionaryValue(myDictionary, "bananas")) // 20
console.log(getDictionaryValue(myDictionary, "grapes")) // Key not found

let value: any = "This is a nice string"
let valueString: string = value as string
console.log(valueString)


// 1. Create an object `user` with optional properties: `name` (string) and `job` (object with `title` and `description`).

// 2. Use optional chaining to safely access the `title` of the `job`. If it's undefined, log "No job title".

// 3. Use nullish coalescing to provide a default job title of "Software Engineer" if the `title` is null or undefined.

type Job = {
  title?: string,
  description?: string,
}

type User = {
  name?: string
  job?: Job
}

const user: User ={
  name: "Alex",
  job: {
    title: 'Developer',
    description: 'Backend developer'
  }
  // job: {}
}

console.log(user.job?.title ?? 'Software Engineer')



