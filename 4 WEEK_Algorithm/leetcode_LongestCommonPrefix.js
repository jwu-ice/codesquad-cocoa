/**
 * 아 진짜 문제  영어라서 제대로 안봣는데 공통접두사였네..
 * 정규표현식, match 뭐 이런거 생각했는데 하나도 안되서 못풀겟다 싶엇는데
 * 공통접두사라고 앞에만 붙는거였다.
 * ctrl + f 같이 검색기능인줄알고  하..
 */
var longestCommonPrefix = function (arr) {
  let result = "";

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[0][i] !== arr[j][i]) return result;
    }
    result += arr[0][i];
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
