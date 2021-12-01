import { TimerView, TimerModel } from "./TimerView.js";
import { TodoView, TodoModel } from "./TodoList/TodoView.js";

const timerTime = 0.2;
const restTimerTime = 0.1;

const TimerApp = new TimerView(
  new TimerModel(timerTime, restTimerTime),
  new TodoView(new TodoModel())
);
