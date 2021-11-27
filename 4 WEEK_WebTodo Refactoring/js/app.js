import { TodoModel, TodoView } from "./view.js";

const model = new TodoModel();
const TodoApp = new TodoView(model);
