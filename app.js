// no change = constant
const a = 5;
const b = 2;
const myName = "Kim";
let yourName = "Oscar";

console.log(a + b);
console.log(a * b);
console.log("hello " + myName);
console.log("hello " + yourName);

// let 은 바뀔 수 있다. 앞에 let을 두는 건 처음 설정할 때만. const는 못바뀜. 나중에 변할 수 있다는 것을 암시하는 기능도 됨.
yourName = "Emo";

console.log("hello " + yourName);

// boolean
const male = false;
const female = true;
// const female = null;

console.log(male);

// Arrays
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// get an item from array
console.log(dayOfWeek[4]);

// add one more day to the array
dayOfWeek.push("sun");

// sunday added
console.log(dayOfWeek);

// Objects
const player = {
  name: "Emo",
  points: 10,
  cute: true,
};

console.log(player.name);

player.cute = false;
console.log(player);

// object can be added or modified
player.lastName = "Kim";
player.points = player.points + 15;

console.log(player);

// function = 계속해서 사용할 수 있는 코드조각

function sayHello(name, age) {
  console.log("Hello my name is " + name + "and I am " + age + " years old");
}

sayHello("Kim", 28);

const firstNumber = 40;
const secondNumber = 8;
//
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

plus(firstNumber, secondNumber);

function divide(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}

divide(firstNumber, secondNumber);

const person = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log(
      "hello!" +
        otherPersonsName +
        ", I am " +
        person.name +
        ". nice to meet you"
    );
  },
};

console.log(person.name);

person.sayHello("lynn");

const c = 40;
const d = 5;

const calculator = {
  plus: function (c, d) {
    console.log(c + d);
  },
  minus: function (c, d) {
    console.log(c - d);
  },
  multi: function (c, d) {
    console.log(c * d);
  },
  divide: function (c, d) {
    console.log(c / d);
  },
};

calculator.plus(c, d);
calculator.minus(c, d);
calculator.multi(c, d);
calculator.divide(c, d);

// using returne - different way
const calculatorReturn = {
  plus: function (c, d) {
    return c + d;
  },
  minus: function (c, d) {
    return c - d;
  },
  multi: function (c, d) {
    return c * d;
  },
  divide: function (c, d) {
    return c / d;
  },
};

const plustResult = calculatorReturn.plus(c, d);
const minusResult = calculatorReturn.minus(c, d);
const multiResult = calculatorReturn.multi(plustResult, d);
const divideResult = calculatorReturn.divide(plustResult, minusResult);

// Returns

const age = 24;
function calculatorKrAge(globalAge) {
  return globalAge + 2 + " years old";
}

const krAge = calculatorKrAge(age);

console.log(krAge);

// Conditions if/else
const old = prompt("How old are you?");

console.log(old);
// Recognizing String or Number
console.log(typeof old, parseInt(age));

const favNumber = parseInt(prompt("What is your favorite number?"));

console.log(favNumber);
console.log(isNaN(favNumber));
// NaN : Not a Number

if (isNaN(favNumber)) {
  // condition === true
  console.log("please write a number");
} else {
  // condition === false
  console.log("Thanks!");
}
