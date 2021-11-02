// 전역변수 기록용
let log = [];

getArea("circle", 2);
getArea("circle", 2, 5);
getArea("rect", 2, 3);
getArea("trapezoid", 10, 15, 12);
getArea("AAA", 100);
printExecutionSequence();

// 도형넓이 구하기
function getArea(shape, ...value) {
  if (shape === "circle") {
    return setLog(shape, getCircle(...value));
  } else if (shape === "rect") {
    return setLog(shape, getRect(...value));
  } else if (shape === "trapezoid") {
    return setLog(shape, getTrapezoid(...value));
  } else {
    return console.log(`circle, rect, trapezoid 중 하나와 길이를 적으세요`);
  }
}
// 원
function getCircle(radius, n) {
  if (n) {
    let result = 0;
    for (let i = radius; i <= n; i++) {
      result += i * i * 3.14;
    }
    return result;
  }
  return radius * radius * 3.14;
}
// 사각형
function getRect(width, height) {
  return width * height;
}
// 사다리꼴
function getTrapezoid(upper_side, lower_side, height) {
  return ((upper_side + lower_side) * height) / 2;
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
