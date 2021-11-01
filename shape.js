// 전역
let log = [];

getArea("circle", 2);
getArea("circle", 2, 5);
getArea("rect", 2, 3);
getArea("trapezoid", 10, 15, 12);
printExecutionSequence();

// shape.js
// 도형넓이 구하기
function getArea(...value) {
  let result = 0;

  // 원 넓이
  if (value[0] === "circle") {
    // 원의 길이가 n씩 증가할 때 모든 원 넓이의 합
    if (value[2]) {
      for (let i = value[1]; i <= value[2]; i++) {
        result += i * i;
      }
      return setLog(value[0], result);
    }
    result = value[1] * value[1];
    return setLog(value[0], result);
    // 사각형 넓이
  } else if (value[0] === "rect") {
    result = value[1] * value[2];
    return setLog(value[0], result);
    // 사다리꼴
  } else if (value[0] === "trapezoid") {
    result = ((value[1] + value[2]) * value[3]) / 2;
    return setLog(value[0], result);
  } else {
    console.log(`circe, rect, trapezoid 중 하나를 고르세요`);
  }
}

// 출력, log 기록
function setLog(shape, result) {
  console.log(result);
  return log.push([shape, result]);
}

// 함수 수행순서,결과 순서대로 출력
function printExecutionSequence() {
  console.log(...log);
}
