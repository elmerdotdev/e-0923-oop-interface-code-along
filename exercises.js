// 1. Create an interface named `Car` with the following properties:
// - `brand` of type string
// - `speed` of type number
// - `accelerate` which is a function that takes a number and increases the speed accordingly.
var _a, _b;
var SportsCar = /** @class */ (function () {
    function SportsCar(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    SportsCar.prototype.accelerate = function (increase) {
        this.speed += increase;
        console.log("This ".concat(this.brand, " increase its speed by ").concat(increase, ". The current speed is ").concat(this.speed));
    };
    return SportsCar;
}());
var mySportsCar = new SportsCar('Lamborghini', 100);
mySportsCar.accelerate(50);
mySportsCar.accelerate(30);
function processResult(result) {
    if (typeof result === "string") {
        console.log("Error"); // if its a string
    }
    else {
        console.log(result.value); // if its a number
    }
}
var engineer = {
    name: 'John',
    position: 'Software Engineer'
};
function getDictionaryValue(dictionary, key) {
    return dictionary.hasOwnProperty(key) ? dictionary[key] : 'Key not found';
}
var myDictionary = {
    "apples": 10,
    "bananas": 20,
    "oranges": 5
};
console.log(getDictionaryValue(myDictionary, "bananas")); // 20
console.log(getDictionaryValue(myDictionary, "grapes")); // Key not found
var value = "This is a nice string";
var valueString = value;
console.log(valueString);
var user = {
    name: "Alex",
    job: {
        title: 'Developer',
        description: 'Backend developer'
    }
    // job: {}
};
console.log((_b = (_a = user.job) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : 'Software Engineer');
