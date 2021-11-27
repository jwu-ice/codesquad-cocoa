var romanToInt = function (s) {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let elems = s.split("");
  let total = elems.reduce((pre, cur) => pre + romanNumber[cur], 0);

  for (let i = 0; i < elems.length; i++) {
    if (!/[IXC]/.test(elems[i])) continue;

    if (/[I]/.test(elems[i]) && /[VX]/.test(elems[i + 1])) {
      total -= romanNumber[elems[i]] * 2;
      continue;
    }
    if (/[X]/.test(elems[i]) && /[LC]/.test(elems[i + 1])) {
      total -= romanNumber[elems[i]] * 2;
      continue;
    }
    if (/[C]/.test(elems[i]) && /[DM]/.test(elems[i + 1])) {
      total -= romanNumber[elems[i]] * 2;
      continue;
    }
  }
  return total;
};

console.log(romanToInt("DCXXI"));
// L: 50, V:5, I:1, I:1, I:1
/*
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
*/
