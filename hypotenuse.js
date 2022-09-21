const inputs = document.querySelectorAll(".input-number");
const button = document.querySelector("#calculate");
const message = document.querySelector(".message");

function calculateSum(a, b) {
  let sum = a * a + b * b;
  console.log(sum);
  return sum;
}

function calculateHypotenuse() {
  const sum = calculateSum(Number(inputs[0].value), Number(inputs[1].value));
  let hypotenuse = Math.sqrt(sum);
  message.innerText = "Hypotenuse is : " + hypotenuse.toFixed(2);
  if (Number(inputs[0].value <= 0)) {
    message.innerText = "Please Enter Value greater than zero";
  } else if (Number(inputs[1].value <= 0)) {
    message.innerText = "Please Enter Value greater than zero";
  }
}

button.addEventListener("click", calculateHypotenuse);
