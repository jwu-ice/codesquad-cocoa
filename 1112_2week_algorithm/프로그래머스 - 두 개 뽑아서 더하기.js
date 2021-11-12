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
