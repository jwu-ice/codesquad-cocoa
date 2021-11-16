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
const data5 = "[1,2,[3,4],[[6,[7]],[8],43],99]"; // 뒷 자리에도 값이 있을 때
run(data5);

function run(data) {
  let stack = [];
  const onlyNumArr = data.replace(/[\[\]]/g, "").split(","); // 숫자만 남기게

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "[") stack = [...stack, data[i]];
    else if (data[i] === "]")
      if (!stack.pop()) return console.log(`2. 여는 괄호가 부족합니다.`);
  }

  if (stack.length) console.log(`2. 닫는 괄호가 부족합니다.`);
  else
    console.log(
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
// donny 코딩 클론.
// JSON.stringify 했을 때 전부보면 data5의 8, 43, 99가 같은 선상에 있다..
//
const dataStructure = {
  type: "root",
  child: [],
};
let parent = dataStructure.child;

const pushChild = (dataStr) => {
  let child;
  if (dataStr === "[") {
    child = {
      type: "array",
      child: [],
    };
    parent.push(child);
    return parent[parent.length - 1].child;
  } else {
    child = {
      type: isNaN(dataStr) ? "string" : "number",
      value: dataStr,
      child: [],
    };
    parent.push(child);
  }
};

const getDataStructure = (data) => {
  const splitData = data.split(/[\],]/);
  console.log(splitData);

  for (let i = 0, len = splitData.length; i < len; i++) {
    const el = splitData[i];
    if (el === "") continue;
    if (el[0] === "[") {
      parent = pushChild(el[0]);
      splitData[i] = el.substring(1, el.length);
    }
    pushChild(splitData[i]);
  }

  return dataStructure;
};
console.log(JSON.stringify(getDataStructure(data5)));

// printArrayInfo(data5);
// [1,2,[3,4],[[6,[7]],[8],43]] depth:4, number:10
