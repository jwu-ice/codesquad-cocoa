// 문제1) T개의 숫자까지 M명이 말한다고 할때 이를 모두 출력하는 프로그램을 만든다.

/* 
  jinsoo => n진수
  count => 한 사람당 몇개까지
  man => 사람 수
  gildong => 길동이 차례
*/
function solution(jinsoo, count, man, gildong) {
  let result = "";
  let gildong_turn = [];

  for (let i = 0; i < count * man; i++) {
    if (i >= count * (gildong - 1) && i < count * gildong) {
      gildong_turn.push(i.toString(jinsoo));
    }

    result += i.toString(jinsoo);
  }

  console.log(jinsoo + "진수 모두 출력 :>> ", result);
  console.log("길동이 차례 숫자 :>> ", gildong_turn);
}

solution(2, 4, 3, 2);
