const _todoStarList = `
    <header>
      <span>🐱‍👤 To do List</span>
      <button id="star">| STAR⭐</button>
    </header>

    <div id="box"></div>
    <div class="starList">
        <li>노션</li>
        <li>루카스</li>
        <li>깃허브</li>
        <li>구글</li>
        <li>MDN</li>
        <li>게더</li>
    </div>
    <div class="log"></div>`;
document.body.insertAdjacentHTML("afterbegin", _todoStarList);

/**
 * 생각해볼 점.
 * 콜백의 콜백의 콜백함수다..
 */

const starsMap = new Map();
let isSelect = false;
const $star = document.querySelector("#star");
const $starList = document.querySelector(".starList");
const $log = document.querySelector(".log");

$star.addEventListener("mouseenter", doGlobalEvent);

function doGlobalEvent() {
  const timer = setTimeout(() => {
    $starList.style.display = "block";
    timeCheckList();
  });

  $star.addEventListener("mouseleave", () => {
    clearTimeout(timer);
  });
}

function timeCheckList() {
  const selectWithTime = function (e) {
    if (!isSelect) {
      isSelect = true;
      setTimeout(() => {
        printList(e);
      }, 500);
    }
  };

  $starList.addEventListener("mousemove", selectWithTime);
  $star.addEventListener("click", () => {
    $starList.style.display = "none";
  });
}

function printList(e) {
  isSelect = false;
  const star = e.target.innerText;

  if (starsMap.has(star)) {
    let starsValue = starsMap.get(star);
    starsMap.set(star, ++starsValue);
  } else {
    starsMap.set(star, 1);
  }

  let print = ``;
  for (const [key, value] of starsMap) {
    print += `
    <span>${key} : ${value}</span>`;
  }
  $log.innerHTML = print;
}
