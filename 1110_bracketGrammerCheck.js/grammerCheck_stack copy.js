/*
    * 스택과 정규표현식ㅇ ㅣ용해서 해보자 *
    1. 배열의 중첩된 깊이를 분석, 원소의 갯수를 출력
    2. 괄호가 매칭에 문제가 있는 경우 오류내용을 출력
    3. 배열 분석 정보를 출력

    숫자값이 두자리 이상일 때와 쉼표가 있을 때는 어떻게 해야할까??
    flat??? 
 */

function run(data) {
  let stack = [];
  let valueData = [];

  // "," split 하고 정규표현식 이용
  const newArr = [...data.split(",")];

  newArr.forEach((value) => {
    const onlyNum = value.replace(/[^0-9]/g, "");
    valueData = [...valueData, onlyNum];

    if (value.includes("[")) {
      stack = [...stack, value];
    }
  });
  const bracketList = newArr.join("").replace(/[0-9]/g, "").split("");
  bracketList.forEach();
  console.log(bracketList);

  stack.length
    ? console.log(`2. 괄호가 일치하지 않습니다.`)
    : console.log(
        `1. 배열의 중첩된 깊이 수준은 ${stack.length}이며, 총 ${valueData.length}개의 원소가 포함되어 있습니다.`
      );
}

// test code
const data = "[1,2,[3,4,[5,[6]]]]"; // 평범
const data2 = "[[1,2,[3,4,[5,[6]]]]"; // 괄호가 문제있을 때
const data3 = "[1,2,,[3,4,[5,[,6]]],2]"; // 쉼표가 문제있을 때
const data4 = "[17,2,[333,43,[520,[6],20]],2]"; // 두 자리 이상의 숫자
run(data2);

// ??? 3. 요구사항 출력정보처럼 이쁘게 펼치는 걸 모르겠다.
