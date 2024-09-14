// Object.keys()
// Returns an array of a given object's own enumerable property names
const person = { name: "John", age: 30, job: "developer" };
console.log(Object.keys(person)); // ['name', 'age', 'job']

// Object.values()
// Returns an array of a given object's own enumerable property values
console.log(Object.values(person)); // ['John', 30, 'developer']

// Object.entries()
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(person)); // [['name', 'John'], ['age', 30], ['job', 'developer']]

// Object.assign()
// Copies all enumerable own properties from one or more source objects to a target object
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 3, c: 4 }
console.log(returnedTarget); // { a: 1, b: 3, c: 4 }

// Object.create()
// Creates a new object with the specified prototype object and properties
const personPrototype = {
  greeting: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const john = Object.create(personPrototype);
john.name = "John";
john.greeting(); // "Hello, my name is John"

// Object.freeze()
// Freezes an object: other code can't delete or change any properties
const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // Throws an error in strict mode
console.log(obj.prop); // 42

// Object.seal()
// Seals an object, preventing new properties from being added and marking all existing properties as non-configurable
const obj2 = { prop: 42 };
Object.seal(obj2);
obj2.prop = 33;
console.log(obj2.prop); // 33
delete obj2.prop; // Can't delete when sealed
console.log(obj2.prop); // 33

// Object.is()
// Determines whether two values are the same value
console.log(Object.is("foo", "foo")); // true
console.log(Object.is(window, window)); // true
console.log(Object.is("foo", "bar")); // false
console.log(Object.is([], [])); // false

// Object.hasOwnProperty()
// Returns a boolean indicating whether the object has the specified property as its own property
const obj3 = { prop: "exists" };
console.log(obj3.hasOwnProperty("prop")); // true
console.log(obj3.hasOwnProperty("toString")); // false
console.log(obj3.hasOwnProperty("hasOwnProperty")); // false

// Object.getOwnPropertyDescriptor()
// Returns a property descriptor for an own property
const obj4 = {
  get foo() {
    return 17;
  },
};
console.log(Object.getOwnPropertyDescriptor(obj4, "foo"));
// { configurable: true, enumerable: true, get: /*the getter function*/, set: undefined }
