/*
    Set을 알고 있었지만 처음 활용. 
    중복안되는건 장점이지만 값을 넣을 때 add로 한개씩 밖에 못 집어넣는걸까?
*/

function solution(numbers) {
  let resultSet = new Set();
  recursive(numbers);

  function recursive(arr) {
    if (arr.length <= 1) return;
    for (let i = 1; i < arr.length; i++) {
      resultSet.add(arr[0] + arr[i]);
    }
    return recursive(arr.splice(1));
  }
  return [...resultSet].sort((a, b) => a - b);
}

solution([5, 0, 2, 7]);
