/*
  JavaScript와 DOM과 의 상호작용을 경험한다.
  DOM 노드를 탐색하고, 추가하는 API를 안다.
  Event를 등록하고 Event listener 등록할 수 있다.
  class 형태
*/

class TodoManager {
  constructor(element) {
    element.addEventListener("click", this.eventMenu);
    element.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.addTodo();
    });
  }

  eventMenu = (event) => {
    const action = e.target.dataset.action;
    if (action) this[action](event);
  };

  addTodo() {
    const $input = document.querySelector(".input_task");
    if (!$input.value || $input.value.trim() === "") return;
    const $table = document.querySelector("#table_list");

    const inputRow = `
        <tr>
          <td ><input type="checkbox" class="chk_box" data-action="setLine"></td>
          <td>${$input.value}</td>
          <td class="trash_can" data-action="delTodo"></td>
        </tr>`;

    $table.insertAdjacentHTML("beforeend", inputRow);
    $input.value = "";
  }

  setLine(e) {
    e.target.closest("tr").classList.toggle("checked");
  }

  delTodo(e) {
    e.target.closest("tr").remove();
  }
}

new TodoManager(Box);
