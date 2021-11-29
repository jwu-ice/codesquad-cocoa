import { TimerView, TimerModel } from "./TimerView.js";
import { TodoView } from "./TodoList/TodoView.js";

const timerTime = 0.1;
const restTimerTime = 0.1;
const App = new TimerView(new TimerModel(timerTime, restTimerTime));
