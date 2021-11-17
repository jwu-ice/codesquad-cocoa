class ToDoManager {
  constructor() {
    this.$add = document.querySelector(".Add_button");
    this.$add.addEventListener("click", () => {
      this.clickAddButton();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") eventManager.clickAddButton();
    });
  }

  clickAddButton() {
    const $input = document.querySelector(".input_task");
    const $table = document.querySelector("#table_list");

    if (!$input.value) return alert("일정을 입력하세요!");
    $table.insertRow().innerHTML = `
      <tr>
        <td><input type="checkbox" onclick="eventManager.boxCheck(this)"></td>
        <td>${$input.value}</td>
        <td onclick="eventManager.deleteList(this)"></td>
      </tr>`;
    $input.value = "";
  }

  boxCheck(cur) {
    cur.parentNode.parentNode.classList.toggle("success");
  }

  deleteList(cur) {
    cur.parentNode.remove();
  }
}

const eventManager = new ToDoManager();
