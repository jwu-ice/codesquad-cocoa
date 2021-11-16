/*
    사용자에게 과목별 점수를 입력 받는다.
    1. node.js 비동기 방식으로 사용자 입력을 받는다.
    2. 과목별로 결과가 나오도록 구현
    3. 퀵소트를 사용해서 과목별 점수를 정렬하는 기능 추가
*/

let fs = require("fs");

console.log("A");

fs.readFile(
  "1115_Async_GradeManageProgram/input.txt",
  "utf-8",
  (err, result) => {
    console.log(result);
  }
);

console.log("C");