/*
 - 옆으로 눕힌 배열
[
  [ 0, 0, 0, 4, 3 ],
  [ 0, 0, 2, 2, 5 ],
  [ 0, 1, 5, 4, 1 ],
  [ 0, 0, 0, 4, 3 ],
  [ 0, 3, 1, 2, 1 ]
]
*/

function solution(board, moves) {
  let newBoard = [];
  let basket = [];
  let lostCount = 0;

  // 인형뽑기 눕히기.. 배열 새로만들기
  // for문 2번쓰는건 좀 ...
  for (let i = 0; i < board.length; i++) {
    let widthBoard = [];
    for (let j = 0; j < board.length; j++) {
      widthBoard = [...widthBoard, board[j][i]];
    }
    newBoard = [...newBoard, widthBoard];
  }

  // 인형뽑기를 해보자
  moves.forEach((choiceIndex) => {
    let curBoard = newBoard[choiceIndex - 1];
    let _findIndex = curBoard.findIndex((value) => value > 0);
    if (!curBoard[_findIndex]) return;

    basket = [...basket, curBoard[_findIndex]];
    curBoard[_findIndex] = 0;

    if (basket[basket.length - 1] === basket[basket.length - 2]) {
      basket.splice(basket.length - 2, 2);
      lostCount += 2;
    }
  });
  return lostCount;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
// 4
