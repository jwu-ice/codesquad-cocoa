/*
    - 함수 형태로 구현
    - 표전정규분포표를 참고
*/

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
  // 표준값 Z = ( X - 평균 ) / 표준편차

  let Z_70 = +((70 - average) / standard).toFixed(2);
  let Z_80 = +((80 - average) / standard).toFixed(2);

  // 표준정규분포표를 참고해서 구현
  // 1.03 -> 0.8485 / 0.28 -> 0.6103
  // expect: 0.4588
  if (Z_70 === -1.03) Z_70 = 1 - 0.8485;
  if (Z_80 === 0.28) Z_80 = 0.6103;
  return (result = ((Z_80 - Z_70) * 100).toFixed(2));
}

const mathScore = [
  89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25,
  67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01,
];

console.log(`평균:`, getMean(mathScore));
console.log(`표준편차:`, getStandardDeviation(mathScore));
console.log(
  `70-80점 사이의 값을 갖는 비율은 얼마인가? ${findPercent_70to80(
    getMean(mathScore),
    getStandardDeviation(mathScore)
  )}%를 가진다.`
);
