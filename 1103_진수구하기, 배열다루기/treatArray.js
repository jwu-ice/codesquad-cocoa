/*
    1. factorial 함수

    임의의 숫자(m)를 입력받아 1부터 m까지의 factorial 값을
    배열로 담아서 반환하는 함수 만들기.
*/
// for문 안의 for문
function calculate(m) {
  let result = [1];
  for (let i = 2; i <= m; i++) {
    let factorial = 1;
    for (let j = i; j > 1; j--) {
      factorial *= j;
    }
    result = [...result, factorial];
  }
  console.log(result);
}

// 이전 값 곱하기
// 1  2  6  24  120
// 2배 3배 4배 5배
function calculate_2(m) {
  let result = [1];
  for (let i = 2; i <= m; i++) {
    result = [...result, i * result[i - 2]];
  }
  console.log(result);
}
// calculate(4);
// calculate_2(6);

/*
    2. 배열 거르기

    주어진 사람들 중 아래 조건을 만족하는 사람들로 
    구성된 배열을 만들어서 반환하는 함수 만들기.

    - 특수기호가 없는 아이디 제외
    - 아이디에서 숫자를 제거

    2 가지 iteration을 처리하는 버전을 만든다.
    for/while문을 사용한 버전 만들기.
    forEach,filter, map등의 고차함수를 사용한 버전 만들기
*/

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

function filterId(peoples) {
  const goodPeoples = [];
  for (let i = 0; i < peoples.length; i++) {
    // 특수기호가 있는 아이디 제외
    const badPeoples = /[!@#%&]/g.test(peoples[i]);
    if (!badPeoples) {
      goodPeoples.push(peoples[i]);
    }
  }
  console.log(goodPeoples.map((value) => value.replace(/[0-9]/g, "")));
}
// filterId(peoples);

/*
    3. 평균 구하기

    아래 예시는 네 명의 학생에 대한 과목 점수이다.
    각 학생은 3가지 과목에 대한 점수를 가지고 있다.
    각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.
*/

const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

function getAverage(grades) {
  let averagePoint = [];
  let maxAveragePoint = [];
  grades.forEach(
    (value, index) =>
      (averagePoint[index] =
        value.reduce((previous, current) => previous + current, 0) /
        value.length)
  );
  grades.forEach(
    (value, index) => (maxAveragePoint[index] = Math.max(...value))
  );

  console.log("각 학생의 평균점수: ", averagePoint);
  console.log(
    "모든 학생의 최고점수의 평균점수: ",
    maxAveragePoint.reduce(
      (previous, current, index, arr) => previous + current / arr.length,
      0
    )
  );
}
// getAverage(grades);

/*
    4. 배열 만들기

    아래 데이터를 확인한다.
    https://gist.github.com/crongro/ade2c3f74417fc202c8097214c965f27
    숫자타입으로만 구성된 요소를 뽑아 배열만들기

    실행결과
    ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]
*/
const data = {
  debug: "on",
  window: {
    title: "Sample Konfabulator Widget",
    name: "main_window",
    width: 500,
    height: 500,
  },
  image: {
    src: "Images/Sun.png",
    name: "sun1",
    hOffset: 250,
    vOffset: 250,
    alignment: "center",
  },
  text: {
    data: "Click Here",
    size: 36,
    style: "bold",
    name: "text1",
    hOffset: 250,
    vOffset: 100,
    alignment: "center",
    onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
  },
};

function makeNumberArray(data) {
  const upper_key = Object.keys(data);
  for (i in upper_key) {
    const keys = Object.values(data[upper_key[i]]);
    console.log(data[upper_key[i]]);
  }
}

makeNumberArray(data);
