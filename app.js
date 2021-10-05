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
