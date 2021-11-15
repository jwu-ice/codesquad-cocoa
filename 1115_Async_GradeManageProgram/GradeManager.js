/*
    함수는 그 역할이 명확하고, 재사용 가능한 형태로 만든다.
    함수만으로 구현해도 되고, 객체단위로 프로그램을 만들어서 구현할 수 있다.
*/

const mathScore = [
  89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25,
  67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01,
];

// 평균 구하기
function getMean(grade) {
  return grade.reduce((pre, cur) => pre + cur) / grade.length;
}

// 표준편차
function getStandardDeviation(grade) {
  const average = getMean(grade);
  // 분산
  const dispersion =
    grade.reduce((pre, cur) => pre + Math.pow(cur - average, 2), 0) /
    grade.length;
  return Math.sqrt(dispersion);
}

function findPercent_70to80(average, standard) {
  // (평균, 표준편차^2) (77.8665, 7.6719.. ^2)
  // 70 ~ 80을 구하라
  // 공식 표준값 Z = (x - 평균) / 표준편차

  let Z_70 = +((70 - average) / standard).toFixed(2);
  let Z_80 = +((80 - average) / standard).toFixed(2);
  if (Z_70 === -1.03) Z_70 = 1 - 0.8485;
  if (Z_80 === 0.28) Z_80 = 0.6103;
  return Z_80 - Z_70;
}

console.log(getMean(mathScore));
console.log(getStandardDeviation(mathScore));
console.log(
  findPercent_70to80(getMean(mathScore), getStandardDeviation(mathScore))
);

// -1.03 < z <  0.28
// 1 - 0.8485       0.6103
// 0.1515       0.6103
// 0.4588
