// for문써서 map 만들기
// const array1 = ["a", "b", "c"];
// function forEach(arr, fn, map = []) {
//   for (let i = 0; i < arr.length; i++) {
//     map = [...map, fn(arr[i])];
//   }
//   return map;
// }
// forEach(array1, (element) => element + 1);

// 비동기함수 진행
// function plus() {
//   let a = 1;
//   setTimeout(() => console.log(++a), 0);
//   return a;
// }

// const result = plus();
// console.log("result :", result); //?

// 클로저연습
// let phrase = "Hello";

// function say(name) {
//   console.log(`${phrase},${name}`);
// }

// say("John");

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter.call(this));

// let nums = (...arg) => {
//   console.log(arg);
// };
// nums(1, 2, 3);

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// async / await 의 기초
/**
 * function 앞에 async를 붙인다.
 * 그냥 return 하면 Promise를 반환하게 되기에
 * .then()블럭을 사용한다.
 *
 */
// async function hello() {
//   return (greeting = await Promise.resolve("Hello"));
// }

// hello().then((value) => console.log(value));

// 비동기연습
// const baseData = [1, 2, 3, 4, 5, 6, 100];

// const asyncRun = (arr, fn) => {
//   arr.forEach((v, i) => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log("cb 2");
//         fn(i);
//       }, 1000);
//       console.log("cb 1");
//     }, 1000);
//   });
// };

// asyncRun(baseData, (idx) => console.log(idx));
