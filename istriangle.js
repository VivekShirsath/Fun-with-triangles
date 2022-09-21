const inputs = document.querySelectorAll(".input-number");
const button = document.querySelector("#is-triangle-button");
const message = document.querySelector(".message");

function calculateSum(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  console.log(sum);
  return sum;
}

function isTriangle() {
  const sum = calculateSum(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    message.innerText = "Yay! The angles form a triangle";
  } else {
    message.innerText = "Oh!The angles don't  form a triangle";
  }

  if (Number(inputs[0].value) < 1) {
    message.innerText = "Enter valid input it shoud be more than 0";
  } else if (Number(inputs[1].value) < 1) {
    message.innerText = "Enter valid input it shoud be more than 0";
  } else if (Number(inputs[2].value) < 1) {
    message.innerText = "Enter valid input it shoud be more than 0";
  }
}

button.addEventListener("click", isTriangle);
