/*
    사용자에게 과목별 점수를 입력 받는다.
    1. node.js 비동기 방식으로 사용자 입력을 받는다.
    2. 과목별로 결과가 나오도록 구현
    3. 퀵소트를 사용해서 과목별 점수를 정렬하는 기능 추가
*/

import { CalculateManager } from "./GradeManager_Class";

const fs = require("fs");
fs.readFile(
  "1115_Async_GradeManageProgram/input.txt",
  "UTF-8",
  (err, result) => {
    getSubject(result);
  }
);

const getSubject = (text) => {
  const subjects = JSON.parse(text);
  console.log("과목별 점수:", subjects);

  console.log("quickSort:", quickSort(subjects));
};

// 객체로 풀다 성공은 했다. 하지마 문제를 잘못 이해했음.
// 객체는 쓰레기다 Map을 쓰자

const quickSort = (originObj) => {
  console.log("originObj :>> ", originObj);
  if (Object.keys(originObj).length <= 1) return originObj;

  const pivot = originObj[Object.keys(originObj)[0]];
  let left = {};
  let right = {};

  for (let i = 1; i < Object.keys(originObj).length; i++) {
    let obj = {};
    obj[Object.keys(originObj)[i]] = originObj[Object.keys(originObj)[i]];
    if (originObj[Object.keys(originObj)[i]] <= pivot) Object.assign(left, obj);
    else Object.assign(right, obj);
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  const pivot_obj = {};
  pivot_obj[Object.keys(originObj)[0]] = pivot;

  return { ...lSorted, ...pivot_obj, ...rSorted };
};

const manager = new CalculateManager();
manager.
