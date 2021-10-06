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
const female = null;

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

// function
function sayHello() {
  console.log("Hellooo!");
}
