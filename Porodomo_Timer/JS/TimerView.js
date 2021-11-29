import { TimerModel } from "./TimerModel.js";
/**
 * <section id="timerPage">
      <div id="focus">Learn to Javascript Closure<XZC</div>
      <div id="time"></div>
      <div id="progressBar">progressBar</div>
      <div id="playBtn"></div>
      <div id="stopBtn"></div>
      <div id="refreshBtn"></div>
    </section>
 */
class TimerView {
  constructor(model) {
    this.model = model;
    this.timer = this.model.timerTime * 60;
    this.restTimer = this.model.restTimerTime * 60;

    this.pomodoroCount = 1;
    this.setTimer = null;

    this.addEvent();
    this.updateTimer();
  }

  addEvent() {
    this.$("#timerPage").addEventListener(
      "click",
      this.eventHandler.bind(this)
    );
  }

  eventHandler(e) {
    const action = e.target.dataset.action;
    if (action) this[action](this.timer);
  }

  $(selector) {
    return document.querySelector(selector);
  }

  playBtn() {
    this.toggleBtnList();
    this.pomodoroTime(this.timer);
  }

  pomodoroTime(currTime) {
    this.timer = currTime;
    this.setTimer = setInterval((e) => {
      if (this.timer < 1) {
        clearInterval(this.setTimer);
        this.$("body").classList.toggle("hidden");
        this.timer = this.restTimer;
        if (this.pomodoroCount % 2 === 1) {
          this.pomodoroTime(this.timer);
        } else {
          this.pomodoroTime(this.restTimer);
        }
      }

      this.timer--;
      this.progressBar(this.timer);
      this.updateTimer();
    }, 1000);

    this.pomodoroCount++;
    console.log("this.pomodoroCount :", this.pomodoroCount);
  }

  stopBtn() {
    this.toggleBtnList();
    clearInterval(this.setTimer);
  }

  refreshBtn() {
    this.toggleBtnList();
    clearInterval(this.setTimer);
    this.timer = this.model.timerTime * 60;
    this.updateTimer();
    this.progressBar(this.timer);
  }

  toggleBtnList() {
    this.$("#playBtn").classList.toggle("hide");
    this.$("#stopBtn").classList.toggle("hide");
    this.$("#refreshBtn").classList.toggle("hide");
  }

  updateTimer() {
    const min = parseInt(this.timer / 60);
    const sec = this.timer % 60;
    this.$("#time").innerHTML = `${this.timer < 600 ? 0 : ""}${min}:${
      sec < 10 ? 0 : ""
    }${sec}`;
  }

  progressBar(currTime) {
    const $bar = this.$("#barStatus");
    const max = this.model.timerTime * 60;
    $bar.style.width = ((max - currTime) / max) * 100 + "%";
  }
}

export { TimerView, TimerModel };
