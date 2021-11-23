class Model {
  constructor() {
    this.todos = [
      { id: 1, text: "자바스크립트 자료구조", middleLine: false, date: "" },
    ];
  }

  addTodoModel(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText.trim(),
      middleLine: false,
    };

    this.todos.push(todo);
  }

  setLineTodoModel(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            text: todo.text,
            middleLine: !todo.middleLine,
            date: "",
          }
        : todo
    );
  }

  deleteTodoModel(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  modifyTodoModel(id, updateText) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            text: updateText,
            middleLine: todo.middleLine,
            date: "",
          }
        : todo
    );
  }
}
/*
  <div class="title">
    <span>ToDo List</span>
  </div>
*/
class View {
  constructor(model) {
    this.model = model;

    // 메소드 사용해서 넣는 방법
    // this.div = this.createElement("div", "title");
    // this.box.append(this.div);

    // this.div_title = this.getElement(".title");
    // this.span = this.createElement("span");
    // this.span.textContent = "Todo List";
    // this.div_title.append(this.span);

    // HTML을 직접 주입시키는 방법
    const _todoListTitle = `
    <div class="title">
      <span>Todo List</span>
    </div>`;

    const _todoInputBox = `
    <div class="inputBox">
      <input class="input" type="text" placeholder="New Task" />
      <input class="add_btn" data-action="addTodo" value="Add" readonly/>
    </div>
    <p class="alert">&nbsp;</p>
    `;

    const _todoTable = `
    <table id="table_list"></table>
    `;

    this.box = this.getElement("#box");
    this.box.insertAdjacentHTML("beforeend", _todoListTitle);
    this.box.insertAdjacentHTML("beforeend", _todoInputBox);
    this.box.insertAdjacentHTML("beforeend", _todoTable);

    this.box.addEventListener("click", this.handler);

    this.input = this.getElement(".input");
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.addTodo();
    });

    this.todoList = this.getElement("#table_list");
    this.showTodos(model.todos);
  }

  // 클릭 시 data-* 속성 값을 확인합니다. 값이 있으면 해당 메소드를 실행합니다.
  handler = (event) => {
    const action = event.target.dataset.action;
    console.log("action: ", action);
    if (action) this[action](event);
  };

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get todoInput() {
    return this.input.value;
  }

  set todoInput(str) {
    return (this.input.value = str);
  }

  // Event Controller
  addTodo() {
    if (!this.todoInput.trim()) return this.alertTodo();
    this.alertTodo("right");

    this.model.addTodoModel(this.todoInput);
    this.showTodos(this.model.todos);
    this.todoInput = "";
  }

  setLineTodo(e) {
    const todoId = parseInt(e.target.parentElement.parentElement.id);
    this.model.setLineTodoModel(todoId);
    this.showTodos(this.model.todos);
  }

  deleteTodo(e) {
    const todoId = parseInt(e.target.parentElement.id);
    this.model.deleteTodoModel(todoId);
    this.showTodos(this.model.todos);
  }

  //
  modifyTodo(e) {
    const modifyText = e.target.parentElement.children[1].textContent;
    console.log("modifyText:", modifyText);
    const todoId = parseInt(e.target.parentElement.id);
    this.model.modifyTodoModel(todoId, modifyText);
    this.showTodos(this.model.todos);
  }

  // 수정 inner 칸에 마우스가 들어왔을 때 수정버튼 보이게
  modifyFocus(e) {
    const targetId = e.target.nextSibling.nextSibling;
    targetId.setAttribute("display", "block");
    console.log(targetId);
    e.target.addEventListener("focusin", this.modifyTodo);
    this.showTodos(this.model.todos);
  }

  alertTodo(right) {
    const alertElem = this.getElement(".alert");
    if (right) return (alertElem.innerHTML = "&nbsp;");
    alertElem.textContent = "잘못 적었습니다. 다시 적어주세요.";
  }

  showTodos(todos) {
    this.todoList.textContent = "";

    if (todos.length === 0) {
      const emptyListHtml = `<tr><td style="text-align:center">Todo List를 입력하세요!</td></tr>`;
      this.todoList.insertAdjacentHTML("beforeend", emptyListHtml);
    } else {
      todos.forEach((elem, index) => {
        let listHtml = "";

        if (elem.middleLine) {
          listHtml = `
        <tr id="${elem.id}">
          <td><input type="checkbox" data-action="setLineTodo" checked></td>
          <td><s>${elem.text}</s></td>
          <td data-action="modifyTodo"></td>
          <td data-action="deleteTodo"></td>
        </tr>`;
        } else {
          listHtml = `
        <tr id="${elem.id}">
          <td><input type="checkbox" data-action="setLineTodo"></td>
          <td data-action="modifyFocus" contenteditable="true">${elem.text}</td>
          <td data-action="modifyTodo" display="none"></td>
          <td data-action="deleteTodo"></td>
        </tr>`;
        }
        this.todoList.insertAdjacentHTML("beforeend", listHtml);
      });
    }
  }
}

const model = new Model();
const todoApp = new View(model);
