class ToDoManager {
  constructor() {
    this.$add = document.querySelector(".Add_button");
    this.$add.addEventListener("click", (e) => {
      this.clickAddButton();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") eventManager.clickAddButton();
    });
  }

  clickAddButton() {
    const $input = document.querySelector(".input_task");
    const $table = document.querySelector("#list");

    if (!$input.value) return alert("일정을 입력하세요!");
    $table.insertRow().innerHTML = `
      <tr>
        <td><input type="checkbox" onclick="eventManager.boxCheckFunc(this)"></td>
        <td>${$input.value}</td>
        <td onclick="eventManager.deleteLine(this)"></td>
      </tr>`;
    $input.value = "";
  }

  boxCheckFunc(cur) {
    cur.parentNode.parentNode.classList.toggle("success");
  }

  deleteLine(cur) {
    cur.parentNode.remove();
  }
}

const eventManager = new ToDoManager();

// 반복되는 모든 요소에 이벤트 핸들러를 넣으려면 반복문을 써야하는걸까?
