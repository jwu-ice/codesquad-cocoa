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

init();

function init() {
  collectEvent(1000, 500);
}

function collectEvent(starClickTime, listMouseMoveTime) {
  const $star = document.querySelector("#star");
  const $starList = document.querySelector(".starList");
  const $log = document.querySelector(".log");
  const starsMap = new Map();
  let isAfterTime;
  let timer;

  $star.addEventListener("mouseenter", (e) => {
    if (timer) return;
    timer = setTimeout(() => {
      $starList.style.display = "block";
      timer = null;
    }, starClickTime);
  });

  $star.addEventListener("mouseleave", () => {
    clearTimeout(timer);
  });

  $starList.addEventListener("mousemove", (e) => {
    if (!isAfterTime) {
      isAfterTime = setTimeout(() => {
        printList(e.target.innerText, starsMap, $log);
        isAfterTime = null;
      }, listMouseMoveTime);
    }
  });

  $star.addEventListener("click", () => {
    $starList.style.display = "none";
  });
}

/**
 * @param {MouseEvent} e
 * @param {Map} starsMap
 */
function printList(eventTargetText, starsMap, $log) {
  const star = eventTargetText;

  if (starsMap.has(star)) {
    starsMap.set(star, starsMap.get(star) + 1);
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
