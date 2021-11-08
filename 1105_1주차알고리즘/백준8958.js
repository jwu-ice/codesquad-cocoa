/*

"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, 
X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 
그 문제까지 연속된 O의 개수가 된다. 
예를 들어, 10번 문제의 점수는 3이 된다.
"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

- 한줄만 실행시키는 코드 작성함.
*/

const OX_Quiz = (arg) => {
  let sum = 0;
  const arr = arg.split("");
  check_OX(arr);

  function check_OX(arr) {
    let count = 0;
    arr.forEach((value) => {
      if (value === "O") {
        sum += ++count;
      } else if (value === "X") {
        count = 0;
      }
    });
  }
  console.log(sum);
};

OX_Quiz(`OOOOOOOOOO`);
