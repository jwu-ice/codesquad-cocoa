export class TodoModel {
  constructor() {
    this.todos = [
      {
        id: 1,
        text: "leetcode 알고리즘 5문제 풀기",
        finish: false,
      },
      {
        id: 2,
        text: "자바스크립트 딥다이브 10장 공부",
        finish: false,
      },
      {
        id: 3,
        text: "코드스쿼드 코코아 마무리하기",
        finish: true,
      },
      {
        id: 4,
        text: "유키와 산책하기",
        finish: true,
      },
    ];
  }

  addTodoModel(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText.trim(),
      finish: false,
    };

    this.todos.push(todo);
  }

  finishTodoModel(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            text: todo.text,
            finish: !todo.finish,
          }
        : todo
    );
  }

  deleteTodoModel(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
