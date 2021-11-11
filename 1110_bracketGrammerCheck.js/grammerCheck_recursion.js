/*
    * 재귀함수 이용해서 해보자 *
    1. 배열의 중첩된 깊이를 분석, 원소의 갯수를 출력
    2. 괄호가 매칭에 문제가 있는 경우 오류내용을 출력
    3. 배열 분석 정보를 출력
 */

function run(data) {
  let stack = [];
  let depth = 0;
  let dataCount = 0;

  console.log("stack: ", stack);
  console.log("count: ", dataCount);
  console.log(
    `1. 배열의 중첩된 깊이 수준은 ${depth}이며, 총 ${dataCount}개의 원소가 포함되어 있습니다`
  );
  console.log(`2. 괄호가 일치하지 않습니다`);
}

// test code
const data = "[1,2,[3,4,[5,[6]]]";
// const data = "[1,2,[3,4,[5,[6]]"; // 괄호가 문제있을때
run(data);
