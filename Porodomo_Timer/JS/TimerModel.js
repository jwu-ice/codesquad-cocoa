export class TimerModel {
  constructor(time, restTime) {
    this.timerTime = time;
    this.restTimerTime = restTime;
  }

  setTimer(setTime, setRestTime) {
    this.timerTime = setTime;
    this.restTimerTime = setRestTime;
  }
}
