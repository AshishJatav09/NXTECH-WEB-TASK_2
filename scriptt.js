const questions = [
  {
    question: "What is the capital city of France?",
    options: ["Berlin", "Paris", "London", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which programming language is often called the 'mother of all languages'?",
    options: ["Java", "C", "Python", "Assembly"],
    answer: "C"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperText and links Markup Language", "None of the above"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    question: "What year was the Python programming language first released?",
    options: ["1991", "2000", "1985", "1995"],
    answer: "1991"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (const option of questions[currentQuestion].options) {
      const radioBtn = document.createElement("input");
      radioBtn.setAttribute("type", "radio");
      radioBtn.setAttribute("name", "answer");
      radioBtn.setAttribute("value", option);
      optionsElement.appendChild(radioBtn);

      const label = document.createElement("label");
      label.textContent = option;
      optionsElement.appendChild(label);

      optionsElement.appendChild(document.createElement("br"));
    }
  } else {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector("input[name='answer']:checked");
  const resultElement = document.getElementById("result");

  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
      score++;
    }

    currentQuestion++;
    loadQuestion();
  } else {
    resultElement.textContent = "Please select an answer!";
  }
}

loadQuestion();
