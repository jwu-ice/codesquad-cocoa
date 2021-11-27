/**
 * 재귀로 푸니까 시간이 오래걸린다. 1500ms
 * while문으로 풀면 130ms ~ 270ms까지 되는 것 같다.
 */

// 재귀문
var twoSum = function (nums, target) {
  return twoSumRecursive(nums, target);
};

var twoSumRecursive = function (nums, target, curIndex = 0, result = []) {
  nums.forEach((num, index) => {
    if (nums[curIndex] + nums[curIndex + 1 + index] === target) {
      result = [curIndex, curIndex + 1 + index];
    }
  });
  if (result.length) return result;

  return twoSumRecursive(nums, target, ++curIndex);
};

console.log(twoSum([2, 7, 11, 15], 9));

// console.log(twoSum([2, 7, 11, 15], 26));

// while문
// var twoSum = function (nums, target) {
//   let [i, j] = [0, 1];
//   while (nums[i] + nums[j] !== target) {
//     j++;
//     if (j === nums.length) j = ++i + 1;
//   }
//   return [i, j];
// };
