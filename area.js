const inputs = document.querySelectorAll(".input-number");
const button = document.querySelector("#area-button");
const message = document.querySelector(".message");

function calculateSum(a, b) {
  let multiply = (a * b) / 2;
  console.log(multiply);
  return multiply;
}

function calculateHypotenuse() {
  const sum = calculateSum(Number(inputs[0].value), Number(inputs[1].value));
  message.innerText = "Hypotenuse is : " + sum.toFixed(2);
  if (Number(inputs[0].value <= 0)) {
    message.innerText = "Please Enter Value greater than zero";
  } else if (Number(inputs[1].value <= 0)) {
    message.innerText = "Please Enter Value greater than zero";
  }
}

button.addEventListener("click", calculateHypotenuse);
