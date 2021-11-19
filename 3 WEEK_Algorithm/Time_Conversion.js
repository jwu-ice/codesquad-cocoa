// Date 객체를 쓰고싶었는데 찾아보니 알맞는게 없었고..
// 너무 하드코딩했다.
function timeConversion(s) {
  const timeSlice = s.replace(/[A-Z]/g, "");
  const timeSliceSplit = timeSlice.split(":");

  if (s.substr(-2, 2) === "PM") {
    if (+timeSliceSplit[0] >= 12) return timeSlice;
    else {
      timeSliceSplit[0] = +timeSliceSplit[0] + 12;
      return timeSliceSplit.join(":");
    }
  } else if (s.substr(-2, 2) === "AM") {
    if (+timeSliceSplit[0] >= 12) {
      timeSliceSplit[0] = +timeSliceSplit[0] - 12;
      if (timeSliceSplit[0] < 10) {
        timeSliceSplit[0] = "0" + timeSliceSplit[0];
      }
      return timeSliceSplit.join(":");
    } else return timeSlice;
  }
}

console.log(timeConversion("12:40:22AM"));
