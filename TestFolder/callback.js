// for문써서 map 만들기
// const array1 = ["a", "b", "c"];
// function forEach(arr, fn, map = []) {
//   for (let i = 0; i < arr.length; i++) {
//     map = [...map, fn(arr[i])];
//   }
//   return map;
// }
// forEach(array1, (element) => element + 1);

function plus() {
  let a = 1;
  setTimeout(() => console.log(++a), 0);
  return a;
}

const result = plus();
console.log("result :", result); //?
