// 문제1) T개의 숫자까지 M명이 말한다고 할때 이를 모두 출력하는 프로그램을 만든다.

solution(2, 4, 3, 2);

// n진수, 한 사람당 몇개까지, 사람 수, 길동이 차례
function solution(jinsoo, count, man, gildong) {
  let result = "";
  let gildong_turn = [];
  for (let i = 0; i < count * man; i++) {
    if (i >= count * (gildong - 1) && i < count * gildong) {
      gildong_turn = [...gildong_turn, i.toString(jinsoo)];
    }
    result += i.toString(jinsoo);
  }
  console.log(jinsoo + "진수 모두 출력 :>> ", result.split(""));
  console.log("길동이 차례 숫자 :>> ", gildong_turn);
}
