/*
    9000000000000 일때 25.972 seconds
*/

function solution(n) {
  if (n === 0) return 0;
  let yaksoo = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) yaksoo = [...yaksoo, i];
  }
  yaksoo = [...yaksoo, n];
  return yaksoo.reduce((pre, cur) => pre + cur, 0);
}
solution(12);
