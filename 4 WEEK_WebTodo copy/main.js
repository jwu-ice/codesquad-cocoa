// https://www.taniarascia.com/javascript-mvc-todo-app/ 실습
// 객체 말고 맵으로 바꾸면 CRUD 더 편할거같은데.. 일단 나중에 해보자.
class Model {
  constructor() {
    this.todos = [
      {
        id: 1,
        text: "마라톤을 해보자",
        complete: false,
      },
      { id: 2, text: "정원 가꾸기", complete: false },
    ];
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };

    this.todos.push(todo);
  }

  editTodo(id, updatedText) {
    this.todos.forEach((todo) =>
      todo.id === id ? (todo.text = updatedText) : null
    );
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? !todo.complete : todo
    );
  }
}

class View {
  constructor() {
    this.box = this.getElement("#box");
    this.div = this.createElement("div", "title");
    this.box.append(this.div);

    this.div_title = this.getElement("title");
    this.span = this.createElement("span");
    this.span.textContent = "Todo List";
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
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
