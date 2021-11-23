import { TodoView, TodoModel } from "./view.js";

const model = new TodoModel();
const TodoApp = new TodoView(model);
