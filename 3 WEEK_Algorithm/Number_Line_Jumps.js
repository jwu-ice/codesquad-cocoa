// ah.. 조건을 제대로 못읽어서 캥거루 1은 항상 캥거루 2보다 앞에 있다를 못봤다.
// i를 5000번 이상이나 돌리는 무식한 방법
// x2 - x1 % v1 - v2 === 0

function kangaroo(x1, v1, x2, v2, i = 0) {
  console.log(i);
  if (x1 + v1 * i === x2 + v2 * i) return "YES";
  else i++;
  if ((x1 > x2 && v1 >= v2) || (x1 < x2 && v1 <= v2)) return "NO";
  else if (i > 5000) return "NO";
  return kangaroo(x1, v1, x2, v2, i);
}

console.log(kangaroo(0, 3, 4, 2));
// YES OR NO

/*
    거속시 써서 풀기 i = jump , 조건: (x1 < x2)
    x2 - x1 = v1 * i - v2 * i
    x2 - x1 = (v1 - v2) * i
    i = (x2 - x1) / (v1 - v2)
    i는 점프횟수인데 i가 정수여야 하므로! 몫이 딱 나누어 떨어질 때 즉
    if((x2 - x1) % (v1- v2) === 0) return "YES"
    else return "NO"
*/
