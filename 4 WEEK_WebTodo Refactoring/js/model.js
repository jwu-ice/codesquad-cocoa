class TodoModel {
  constructor() {
    this.todos = [
      { id: 1, text: "자바스크립트 자료구조", strikeThrough: false, date: "" },
    ];
  }

  addTodoModel(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText.trim(),
      strikeThrough: false,
    };

    this.todos.push(todo);
  }

  strikeThroughTodoModel(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            text: todo.text,
            strikeThrough: !todo.strikeThrough,
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
            strikeThrough: todo.strikeThrough,
            date: "",
          }
        : todo
    );
  }
}

export default TodoModel;
