/*
  JavaScript와 DOM과 의 상호작용을 경험한다.
  DOM 노드를 탐색하고, 추가하는 API를 안다.
  Event를 등록하고 Event listener 등록할 수 있다.
*/

class ToDoManager {
  constructor() {
    this.$add = document.querySelector(".Add_button");
    this.$add.addEventListener("click", this.printList);
  }

  printList = () => {
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
  };

  boxCheck(cur) {
    cur.parentNode.parentNode.classList.toggle("success");
  }

  deleteList(cur) {
    cur.parentNode.remove();
  }
}

const eventManager = new ToDoManager();

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") eventManager.printList();
});
