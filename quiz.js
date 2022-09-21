const quiz = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const answer = [
  "Acute",
  "Obtuse",
  "Right",
  "130°",
  "30°",
  "Scalene",
  "Isosceles",
  "Equilateral",
  "3",
  "3",
];

function calculateScore(e) {
  e.preventDefault();
  let score = 0;
  let i = 0;
  const formResults = new FormData(quiz);
  console.log(formResults);
  for (let value of formResults.values()) {
    if (value === answer[i]) {
      score = score + 1;
    }
    i = i + 1;
  }
  output.innerText = "Your score is " + score;
}

submit.addEventListener("click", calculateScore);
