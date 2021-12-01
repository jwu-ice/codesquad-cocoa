import { TodoModel } from "./TodoModel.js";

class TodoView {
  constructor(TodoModel) {
    this.model = TodoModel;
    this.focusValue = "";
    this.addEvent();
    this.showTodos(this.model.todos);
  }

  eventHandler(event) {
    const action = event.target.dataset.action;
    console.log(action);
    if (action) this[action](event);
  }

  addEvent() {
    // addScrollEvent();
    this.$("#todoPage").addEventListener("click", this.eventHandler.bind(this));
  }

  addScrollEvent() {
    window.addEventListener("scroll", () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (scrolled === scrollable) {
        alert("you've got reached the bottom");
      }

      console.log("scrollable :>> ", scrollable);
      console.log(scrolled);
    });
  }

  $(selector) {
    return document.querySelector(selector);
  }

  addTodo(e) {
    let addValue = this.$(".inputTodo").value;
    e.preventDefault();
    if (!addValue.trim()) {
      return;
    }
    this.model.addTodoModel(addValue);
    this.showTodos(this.model.todos);
    this.$(".inputTodo").value = "";
  }

  finishTodo(e) {
    const todoId = parseInt(e.target.parentElement.id);
    this.model.finishTodoModel(todoId);

    this.checkSameFocusValue(e);
    this.showTodos(this.model.todos);
  }

  deleteTodo(e) {
    const todoId = parseInt(e.target.parentElement.id);
    this.model.deleteTodoModel(todoId);

    this.checkSameFocusValue(e);
    this.showTodos(this.model.todos);
  }

  focusTodo(e) {
    if (e.target.closest("#todoListFinished")) return;
    let todoText = e.target.parentNode.querySelector(".todoText").innerHTML;
    this.focusValue = todoText;

    const currentId = e.target.parentNode.id;

    this.showTodos(this.model.todos);
    document
      .getElementById(currentId)
      .childNodes[1].classList.add("isFocusing");
  }

  showTodos(todos) {
    this.$("#todoList").textContent = "";
    this.$("#todoListFinished").textContent = "";
    this.$("#focus").innerHTML = this.focusValue;

    this.findJustOneFinish(todos);

    todos.forEach((todo) => {
      this.drawTodo(todo);
    });
  }

  drawTodo(todo) {
    let listHtml = `
        <li id="${todo.id}">
            <div ></div>
            <div data-action="finishTodo"></div>
            <div data-action="focusTodo" class="todoText">${todo.text}</div>
            <div data-action="deleteTodo"></div>
        </li>`;

    if (todo.finish) {
      this.$("#todoListFinished").insertAdjacentHTML("beforeend", listHtml);
      return;
    }
    this.$("#todoList").insertAdjacentHTML("beforeend", listHtml);
  }

  findJustOneFinish(todos) {
    const isFinishJustOne = todos.find((todo) => todo.finish === true);
    if (isFinishJustOne) {
      let listHtml = `<div class="rod"></div>`;
      this.$("#todoListFinished").insertAdjacentHTML("afterbegin", listHtml);
      this.$(".rod").classList.add("hidden");
    }
  }

  checkSameFocusValue(e) {
    if (e.target.parentElement.children[2].innerHTML === this.focusValue) {
      this.focusValue = "";
    }
  }
}

export { TodoView, TodoModel };
