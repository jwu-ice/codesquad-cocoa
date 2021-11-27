import TodoModel from "./model.js";

class TodoView {
  constructor(model) {
    this.model = model;

    const _todoListTitle = `
      <div class="title">
        <span>jwu의 To do List</span>
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

    const _todoStarList = `
      <div class="starList">
        <ul>
          <li>노션</li>
          <li>루카스</li>
        </ul>
      </div>`;

    this.$box = this.getElement("#box");
    this.$box.insertAdjacentHTML("beforeend", _todoListTitle);
    this.$box.insertAdjacentHTML("beforeend", _todoInputBox);
    this.$box.insertAdjacentHTML("beforeend", _todoTable);
    this.$box.insertAdjacentHTML("beforebegin", _todoStarList);

    this.$star = this.getElement("#star");
    this.$starList = this.getElement(".starList");
    this.$input = this.getElement(".input");
    this.$todoList = this.getElement("#table_list");

    this.addMouseAndKeyEvent();
    this.showTodos(model.todos);
  }

  // 클릭 시 data-* 속성 값을 확인합니다. 값이 있으면 해당 메소드를 실행합니다.
  handler = (event) => {
    const action = event.target.dataset.action;
    console.log("action: ", action);
    if (action) this[action](event);
  };

  // addEventListenr 집합
  addMouseAndKeyEvent() {
    this.$box.addEventListener("mousedown", this.handler);

    this.$input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.addTodo();
    });

    this.$star.addEventListener("mouseenter", (e) => {
      const timer = setTimeout(() => {
        this.$starList.style.display = "block";
      }, 1000);
    });

    /* 마우스 나갔을 때 끄기
    this.$star.addEventListener("mouseleave", (e) => {
      console.log("마우스떠나기");
      this.$starList.style.display = "none";
    });
    */
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  insertTodoListText(where, text) {
    this.$todoList.insertAdjacentHTML(where, text);
  }

  get todoInput() {
    return this.$input.value;
  }

  set todoInput(str) {
    return (this.$input.value = str);
  }

  // ## Event Controller View와 Controller 합친?
  addTodo() {
    if (!this.todoInput.trim()) {
      return this.alertTodo(this.todoInput.trim());
    }
    this.alertTodo(this.todoInput);
    this.model.addTodoModel(this.todoInput);
    this.showTodos(this.model.todos);
    this.todoInput = "";
  }

  alertTodo(todo) {
    const alertElem = this.getElement(".alert");
    if (todo) return (alertElem.innerHTML = "&nbsp;");
    alertElem.textContent = "잘못 적었습니다. 다시 적어주세요.";
  }

  strikeThroughTodo(e) {
    const todoId = parseInt(e.target.parentElement.parentElement.id);
    this.model.strikeThroughTodoModel(todoId);
    this.showTodos(this.model.todos);
  }

  deleteTodo(e) {
    const todoId = parseInt(e.target.parentElement.id);
    this.model.deleteTodoModel(todoId);
    this.showTodos(this.model.todos);
  }

  // 포커스 아웃되면 실행취소
  // 수정버튼 클릭시 innerHTML값, modelFunction으로 보내서 바뀐 값을 가져오자.
  modifyTodo(e) {
    const modifyText = e.target.parentElement.children[1].innerHTML;
    const todoId = parseInt(e.target.parentElement.id);
    this.model.modifyTodoModel(todoId, modifyText);
    this.showTodos(this.model.todos);
  }

  // 수정 inner 칸에 클릭했을 때 [수정] 보이게
  modifyFocus(e) {
    const modifyButtonNode = e.target.nextSibling.nextSibling;
    modifyButtonNode.setAttribute("style", "visibility: visible");

    // 해당 칸 이외의 곳 클릭시 [수정] 제거, 기존에 있던 내용 다시백업
    e.target.closest("tr").addEventListener(
      "focusout",
      () => {
        modifyButtonNode.setAttribute("style", "visibility: hidden");
        this.showTodos(this.model.todos);
      },
      { once: true }
    );
  }

  // 현재 가지고 있는 todos를 화면상에 보여줌
  showTodos(todos) {
    this.$todoList.textContent = "";

    // todo가 없다면 입력하라는 text 문구 띄움
    if (todos.length === 0) {
      const emptyListHtml = `<tr><td style="text-align:center">Todo List를 입력하세요!</td></tr>`;
      return this.insertTodoListText("beforeend", emptyListHtml);
    }

    todos.forEach((todo) => {
      this.makeTodo(todo);
    });
  }

  // 템플릿 리터럴로 todo의 strikeThrough(취소선)의 boolean값을 확인
  // 구분해서 출력 (단순히 취소선만 긋는게 아닌, 수정버튼과 contenteditable을 없앰)
  makeTodo(todo) {
    let _listHtml = "";
    if (todo.strikeThrough) {
      _listHtml = `
        <tr id="${todo.id}">
            <td><input data-action="strikeThroughTodo" type="checkbox" checked></td>
            <td><s>${todo.text}</s></td>
            <td data-action="modifyTodo" style="visibility:hidden"></td>
            <td data-action="deleteTodo"></td>
        </tr>`;
    } else {
      _listHtml = `
        <tr id="${todo.id}">
            <td><input data-action="strikeThroughTodo" type="checkbox" ></td>
            <td data-action="modifyFocus" contenteditable="true">${todo.text}</td>
            <td data-action="modifyTodo" style="visibility:hidden"></td>
            <td data-action="deleteTodo"></td>
        </tr>`;
    }
    this.insertTodoListText("beforeend", _listHtml);
  }
}

export { TodoModel, TodoView };
