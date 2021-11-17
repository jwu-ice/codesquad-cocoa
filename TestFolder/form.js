// input 2번에서 focusout 될 때 input 1번과 비교를 한다.

function checkInputValue() {
  const input2 = document.querySelector("input[name='second_name']");

  input2.addEventListener("focusout", (e) => {
    console.log(`${e.target} 엘리먼트에 클릭 발생!`);
    const input1 = document.querySelector("input[name='first_name']");
    const input1Value = input1.value;
    const input2Value = e.target.value;
    const messageNode = document.querySelector(".message");
    messageNode.style.color = "red";

    if (input1Value === input2Value) {
      messageNode.innerHTML = "같은 아이디 입니다.";
      messageNode.style.color = "green";
      return;
    }

    messageNode.innerHTML = "<span>올바른 값을 넣으세요</span>";
  });
}

checkInputValue();
