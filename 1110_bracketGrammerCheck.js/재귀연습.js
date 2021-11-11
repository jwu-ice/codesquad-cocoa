// 3으로 시작, 6으로 끝나게
// 들어갈때마다 +1
// solution 함수의 리턴값의 타입은 함수가 되어야합니다
// 클로저연습
function solution(start, end) {
  return function inner() {
    if (start <= end) return start++;
  };
}

let gfunc = solution(3, 6);
console.log(gfunc());
console.log(gfunc());
console.log(gfunc());
console.log(gfunc());
console.log(gfunc());

// 재귀함수를 연습해보자
