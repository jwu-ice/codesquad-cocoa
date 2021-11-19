function compareTriplets(a, b) {
  const result = [0, 0];
  a.forEach((v, i) => {
    if (v > b[i]) result[0]++;
    else if (v < b[i]) result[1]++;
  });
  console.log(result);
  return result;
}

compareTriplets([5, 6, 7], [3, 6, 10]);
