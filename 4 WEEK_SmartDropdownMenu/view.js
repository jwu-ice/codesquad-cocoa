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
const $star = document.querySelector("#star");
const $starList = document.querySelector(".starList");
const $log = document.querySelector(".log");
let isAfterTime = true;

$star.addEventListener("mouseenter", enterStar);

function enterStar() {
  const timer = setTimeout(() => {
    $starList.style.display = "block";
    addMouseEvent();
  }, 1000);

  $star.addEventListener("mouseleave", () => {
    clearTimeout(timer);
  });
}

function addMouseEvent() {
  const starsMap = new Map();

  const checkBooleanAndPrint = function (e) {
    if (isAfterTime) {
      isAfterTime = false;
      setTimeout(() => {
        printList(e, starsMap);
      }, 500);
    }
  };

  $starList.addEventListener("mousemove", checkBooleanAndPrint);

  // 클릭 시 리스트들 다시 안보이게
  $star.addEventListener("click", () => {
    $starList.style.display = "none";
  });
}

/**
 * @param {MouseEvent} e
 * @param {Map} starsMap
 */
function printList(e, starsMap) {
  const star = e.target.innerText;
  isAfterTime = true;

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
