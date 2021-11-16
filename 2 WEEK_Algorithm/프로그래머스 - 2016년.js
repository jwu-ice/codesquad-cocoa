/*
  날짜를 일수로 바꾸고 나눈 값에 따라 요일을 설정하는 방법이 생각난다.


  (1,1) => "FRI"
  (1,8) => "FRI" (1,31) =>"SUN"
  1 3 5 7 8 10 12 -> 31일
  2               -> 29일 (윤년)
  4 6 9 11        -> 30일
  
  
  


*/

function solution(a, b) {
  let calculate = (a - 1) * 31 + b;
  for (let i = 1; i < a; i++) {
    if (i === 2) calculate -= 2;
    if ([4, 6, 9, 11].includes(i)) calculate--;
  }
  switch (calculate % 7) {
    case 0:
      return "THU";
    case 1:
      return "FRI";
    case 2:
      return "SAT";
    case 3:
      return "SUN";
    case 4:
      return "MON";
    case 5:
      return "TUE";
    case 6:
      return "WED";
  }
}

solution(5, 24);
