// Palindrome: 거꾸로 해도 같은 글자를 말한다.
// level, Hannah, 303, 121
var isPalindrome = function (x) {
  const reverseX = Number(x.toString().split("").reverse().join(""));
  if (x !== reverseX) return false;
  return true;
};

console.log(isPalindrome(-101));
