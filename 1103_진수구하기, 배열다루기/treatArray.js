/*
    1. factorial 함수

    임의의 숫자(m)를 입력받아 1부터 m까지의 factorial 값을
    배열로 담아서 반환하는 함수 만들기.
*/

// 이전 값 곱하기
// 1  2  6  24  120
// 2배 3배 4배 5배

function calculate(m) {
  let result = [1];
  for (let i = 2; i <= m; i++) {
    result = [...result, i * result[i - 2]];
  }
  console.log(result);
}
// calculate(2);

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
    const badPeoples = /[!@#%&^&]/g.test(peoples[i]);
    if (!badPeoples) {
      goodPeoples.push(peoples[i]);
    }
  }
  console.log(
    (result = goodPeoples.map((value) => value.replace(/[0-9]/g, "")))
  );
}
filterId(peoples);

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

  // 평균점수 구하기
  grades.forEach(
    (value, index) =>
      (averagePoint[index] = value
        .reduce((previous, current) => previous + current / value.length, 0)
        .toFixed(2))
  );

  // 최고값 먼저 구하고
  grades.forEach(
    (value, index) => (maxAveragePoint[index] = Math.max(...value))
  );

  // 최고값의 평균점수 구하기
  maxAveragePoint = maxAveragePoint.reduce(
    (previous, current, index, arr) => previous + current / arr.length,
    0
  );

  console.log("각 학생의 평균점수: ", averagePoint);
  console.log("모든 학생의 최고점수의 평균점수: ", maxAveragePoint);
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

function onlyNumberValue(result, arg) {
  const keys = Object.keys(arg);
  const values = Object.values(arg);
  values.forEach((value, i) => {
    if (typeof value === "object") onlyNumberValue(result, value);
    else if (typeof value === "number") result.push(keys[i]);
  });
  return result;
}
// console.log(onlyNumberValue([], data));

/*
  5. 배열 결과 출력
  아래 링크를 눌러서 데이터를 확인한다.
  type이 sk인, name으로 구성된 배열만 출력해본다.
  https://gist.github.com/crongro/a9a118977f82780441db664d6785efe3

  실행결과
  ["Yong", "hary", "solvin", "hani", "chulsu"]
*/

const list = [
  {
    id: 1,
    name: "Yong",
    phone: "010-0000-0000",
    type: "sk",
    childnode: [
      {
        id: 11,
        name: "echo",
        phone: "010-0000-1111",
        type: "kt",
        childnode: [
          {
            id: 115,
            name: "hary",
            phone: "211-1111-0000",
            type: "sk",
            childnode: [
              {
                id: 1159,
                name: "pobi",
                phone: "010-444-000",
                type: "kt",
                childnode: [
                  {
                    id: 11592,
                    name: "cherry",
                    phone: "111-222-0000",
                    type: "lg",
                    childnode: [],
                  },
                  {
                    id: 11595,
                    name: "solvin",
                    phone: "010-000-3333",
                    type: "sk",
                    childnode: [],
                  },
                ],
              },
            ],
          },
          {
            id: 116,
            name: "kim",
            phone: "444-111-0200",
            type: "kt",
            childnode: [
              {
                id: 1168,
                name: "hani",
                phone: "010-222-0000",
                type: "sk",
                childnode: [
                  {
                    id: 11689,
                    name: "ho",
                    phone: "010-000-0000",
                    type: "kt",
                    childnode: [
                      {
                        id: 116890,
                        name: "wonsuk",
                        phone: "010-000-0000",
                        type: "kt",
                        childnode: [],
                      },
                      {
                        id: 1168901,
                        name: "chulsu",
                        phone: "010-0000-0000",
                        type: "sk",
                        childnode: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 117,
            name: "hong",
            phone: "010-0000-0000",
            type: "lg",
            childnode: [],
          },
        ],
      },
    ],
  },
];

function findNameInSK(result, arg) {
  let values = Object.values(arg);
  values.forEach((value) => {
    if (value.type === "sk") result = [...result, value.name];
    if (value.childnode.length) {
      // findNameInSK(result, value.childnode);
      // result = [...result, ...findNameInSK([], value.childnode)];
    }
  });

  return result;
}
// console.log(findNameInSK([], list));

/*
  6. reduce 만들기.
  Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.
*/

const myReduce = (arr, callback, initialValue) => {
  // 초기값 없을 때
  if (initialValue === undefined) {
    initialValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      initialValue = callback(arr[i], initialValue);
    }
    return initialValue;

    // 초기값 있을 때
  } else {
    arr.forEach((value) => (initialValue = callback(value, initialValue)));
    return initialValue;
  }
};
const result_plus = myReduce([1, 2, 3, 4, 5], (next, prev) => next + prev);
// console.log(result_plus);

const result_object = myReduce(
  [1, 2, 1, 2, 1, 3, 4, 1, 4, 5, 5, 4, 4],
  (next, prev) => {
    if (next in prev) {
      prev[next]++;
    } else {
      prev[next] = 1;
    }
    return prev;
  },
  {}
);
// console.log(result_object);
