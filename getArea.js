// 전역변수 기록용
const log = [];

getArea("circle", 2);
getArea("circle", 2, 5);
getArea("rect", 2, 3);
getArea("trapezoid", 10, 15, 12);
getArea("AAA", 100);
printExecutionSequence();

// 도형 넓이 구하기
function getArea(shape, ...value) {
  if (shape === "circle") {
    return setLog(shape, getCircle(...value));
  } else if (shape === "rect") {
    return setLog(shape, getRect(...value));
  } else if (shape === "trapezoid") {
    return setLog(shape, getTrapezoid(...value));
  } else {
    return console.log(`예외처리`);
  }
}

// 원
function getCircle(radius, n) {
  if (n) {
    let total = 0;
    for (let i = radius; i <= n; i++) {
      total += i * i * Math.PI.toFixed(2);
    }
    return total;
  }

  return radius * radius * Math.PI.toFixed(2);
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
  log.push([shape, result]);
}

// 함수 수행순서,결과 순서대로 출력
function printExecutionSequence() {
  console.log(...log);
}
