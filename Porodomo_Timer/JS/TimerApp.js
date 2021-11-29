import { TimerView, TimerModel } from "./TimerView.js";
import { TodoView } from "./TodoList/TodoView.js";

const timerTime = 25;
const restTimerTime = 5;
const App = new TimerView(new TimerModel(timerTime, restTimerTime));
