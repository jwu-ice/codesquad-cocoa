function aVeryBigSum(ar) {
  const calc = ar.reduce((pre, cur) => pre + cur);
  return calc;
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
