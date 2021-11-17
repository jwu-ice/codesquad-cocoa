class ToDoManager {
  constructor() {
    this._add = document.querySelector(".input_button");
    this._add.addEventListener("click", (e) => {
      this.clickAddButton();
    });
  }

  clickAddButton() {
    const input = document.querySelector(".input_task");
    const table = document.querySelector("#list");

    if (!input.value) return alert("일정을 입력하세요!");
    table.insertRow().innerHTML = `
      <tr>
        <td><input type="checkbox" onclick="eventManager.boxCheckFunc(this)"></td>
        <td>${input.value}</td>
        <td></td>
      </tr>`;
    input.value = "";
  }

  boxCheckFunc(cur) {
    const text = cur.parentNode.nextSibling.nextSibling;
    if (cur.checked) text.style.textDecoration = "line-through";
    else text.style.textDecoration = "none";
  }

  deleteLine(cur) {
    cur.parentNode.remove();
  }
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") eventManager.clickAddButton();
});

const eventManager = new ToDoManager();

// 반복되는 모든 요소에 이벤트 핸들러를 넣으려면 반복문을 써야하는걸까?
