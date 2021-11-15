/*
    function a() {
    console.log("A");
    }
*/

let a = function (s) {
  console.log("A");
  console.log("arg: ", s);
};

function slowFunc(callback) {
  callback();
  a("하하");
}

slowFunc(a);
