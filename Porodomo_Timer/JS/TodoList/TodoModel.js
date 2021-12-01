export class TodoModel {
  constructor() {
    this.todos = [
      {
        id: 1,
        text: "Learn to Algorithm",
        finish: false,
      },
      {
        id: 2,
        text: "한글로 써보자아아아ㅠㅜ루아후아후아ㅓdd하우하아 좀 길게 써보면 어떻게 될까",
        finish: false,
      },
      {
        id: 3,
        text: "이것은 완료된 것이니라~",
        finish: true,
      },
      {
        id: 4,
        text: "이것은 완료된 것이니라~222",
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
