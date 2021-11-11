/*
    * 스택과 정규표현식이용해서 해보자 *
    1. 배열의 중첩된 깊이를 분석, 원소의 갯수를 출력
    2. 괄호가 매칭에 문제가 있는 경우 오류내용을 출력
    3. 배열 분석 정보를 출력

    숫자값이 두자리 이상일 때  
    쉼표가 있을 때는 어떻게 해야할까??
    flat??? 
    if(/\[/.test("[")/) -> 배열의 시작 만들기
    JSON.stringify(result, null, 2) -> 예쁘게 출력?
 */

// test code
const data1 = "[1,2,[3,4,[5,[6]]]]"; // 기본
const data2 = "][1,2,[3,4,[5,[6]]]"; // 괄호가 문제있을 때
const data3 = "[1,[2,3,[4]]]"; // 한 깊이에 괄호가 여러개 있을 때
const data4 = "[17,2,[333,[520,[6]]]]"; // 두 자리 이상의 숫자
const data5 = "[1,[2],[3,4,[5,[6],7],2,5]]"; // 뒷 자리에도 값이 있을 때
run(data5);

function run(data) {
  let stack = []; // 괄호 깊이를 알기위한 스택
  const onlyNumArr = data.replace(/[\[\]]/g, "").split(","); // 숫자만 남기게

  // stack에 "[" "]"를 넣어 문법 검사
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "[") stack = [...stack, data[i]];
    else if (data[i] === "]")
      if (!stack.pop()) return console.log(`2. 여는 괄호가 부족합니다.`);
  }

  // 스택길이가 아직 남아있으면 닫는 괄호에 문제있음.
  stack.length
    ? console.log(`2. 닫는 괄호가 부족합니다.`)
    : console.log(
        `1. 배열의 중첩된 깊이 수준은 ${getDepthLevel(data)}이며, 총 ${
          onlyNumArr.length
        }개의 원소가 포함되어 있습니다.`
      );
}

function getDepthLevel(data) {
  const arr = data.split("");
  const leftBracketLastIndex = arr.lastIndexOf("[");
  let leftBracketCount = 0;
  let rightBracketCount = 0;
  for (let i = 0; i <= leftBracketLastIndex; i++) {
    if (arr[i] === "[") leftBracketCount++;
    else if (arr[i] === "]") rightBracketCount++;
  }
  // "["의 개수 - "]"의 개수 = 최대깊이
  return leftBracketCount - rightBracketCount;
}
