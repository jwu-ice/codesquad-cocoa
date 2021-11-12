/*
    * 스택과 정규표현식이용해서 해보자 *
    1. 배열의 중첩된 깊이를 분석, 원소의 갯수를 출력
    2. 괄호가 매칭에 문제가 있는 경우 오류내용을 출력
    3. 배열 분석 정보를 출력

    숫자값이 두자리 이상일 때  
    쉼표가 있을 때는 어떻게 해야할까??
    flat??을 활용하고 싶지만 data값을 온전한 array로 만들기 어렵디.
    JSON.stringify(result, null, 2) -> 예쁘게 출력?
    JSON.parse는 쓰지말자

    11-12: 1,2번은 잘 되지만 3번이 해결이 안되네 하ㅏㅏ 조건 하나하나 맞추기가 너무 헷갈림
 */

// test code
const data1 = "[1,2,[3,4,[5,[6]]]]"; // 기본
const data2 = "][1,2,[3,4,[5,[6]]]"; // 괄호가 문제있을 때
const data3 = "[1,[2,3,[4]]]"; // 한 깊이에 괄호가 여러개 있을 때
const data4 = "[17,2,[333,[520,[6]]]]"; // 두 자리 이상의 숫자
const data5 = "[1,2,[3,4],[[6,[7]],[8],43]]"; // 뒷 자리에도 값이 있을 때
run(data5);

// 문법 체크
function run(data) {
  let stack = []; // 문법검사용
  const onlyNumArr = data.replace(/[\[\]]/g, "").split(","); // 숫자만 남기게

  // stack에 "[" "]"를 넣어 짝이 맞는지 문법 검사
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

// 깊이 수준 구하기
function getDepthLevel(data) {
  let depthArr = [];
  let count = 0;
  const onlyBracketArr = data.replace(/[^\[\]]/g, "");

  // 현재 depth를 계속 넣어줌
  for (let val of onlyBracketArr) {
    if (val === "[") depthArr = [...depthArr, ++count];
    else if (val === "]") depthArr = [...depthArr, count--];
  }

  return Math.max(...depthArr);
}

// 3. 배열 분석 정보를 출력
// 첫번째 "["를 찾고 뒤에서부터 ]를 찾는다. splice로 index만큼 나누어서
// 바깥쪽 값들은 해당 depth만큼의 값, 안쪽 값들은 재귀함수로 다시 돌림.

// 문제있음.. 11-12: 해결못함
// 두자리 이상의 숫자 ex) 102 같은 것을 하나의 인자로 받아야하는데 그게 잘 안됨.
// 재귀 쓰는 것도 어렵고 배열 안의 배열까지 생각하려니까 너무 헷갈린다. 하ㅏ하하ㅏㅏㅏ
function printArrayInfo(data) {
  let splData = data.split("");
  console.log(splData);
  const firstLeftBracket = function (val) {
    return val.indexOf("[");
  };
  const lastRightBracket = function (val) {
    return val.lastIndexOf("]");
  };
  console.log(splData);
  const newArr = splData.splice(
    firstLeftBracket(splData) + 1,
    lastRightBracket(splData) - 1
  );
  console.log(splData);
  console.log(newArr);
  const newNewArr = newArr.splice(
    firstLeftBracket(newArr) + 1,
    lastRightBracket(newArr) - 1
  );
  console.log(newArr);
  console.log(newNewArr);

  /*
  obj = {};
  let testobj = {};
  obj.child = [...obj.child, getChildObj(2)];
  obj.child = [...obj.child, getChildObj(3)];
  testobj = obj.child;
  testobj[0].child = [...testobj[0].child, getChildObj(4)];
  console.log(obj);
  */
}
// printArrayInfo(data5);
// [1,2,[3,4],[[6,[7]],[8],43]] depth:4, number:10
