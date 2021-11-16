/*  input       divisor  return   
    [5, 9, 7, 10]	5	[5, 10]
    [2, 36, 1, 3]	1	[1, 2, 3, 36]
    [3, 2, 6]	    10	[-1]
*/

function solution(arr, divisor) {
  const divArr = arr.filter((value) => !(value % divisor));
  return divArr.length ? divArr.sort((a, b) => a - b) : [-1];
}

console.log(solution([2, 36, 1, 3], 1));
