// 영어를 잘 읽어야 겠다는 생각...
// x 값이 아닌 결과값에 조건을 걸었어야 했는데...
var reverse = function (x) {
  let splited = x.toString().split("");

  if (splited[0] === "-") {
    return checkRange(Number("-".concat(splited.splice(1).reverse().join(""))));
  }

  return checkRange(Number(splited.reverse().join("")));
};

function checkRange(result) {
  if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
    return 0;
  }
  return result;
}

console.log(reverse(1534236469));
