const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of india?",
    options: ["Berlin", "Madrid", "Delhi", "Rome"],
    correctAnswer: "Delhi",
  },
  {
    question: "What is the capital of USA?",
    options: ["Berlin", "Madrid", "New York", "Rome"],
    correctAnswer: "New York",
  },
  {
    question: "What is the capital of England?",
    options: ["Berlin", "Madrid", "London", "Rome"],
    correctAnswer: "London",
  },
];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");

  questionElement.innerText = quizData[currentQuestion].question;

  optionsContainer.innerHTML = "";
  quizData[currentQuestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(answer) {
  userAnswers[currentQuestion] = answer;
}

function submitAnswer() {
  const selectedAnswer = userAnswers[currentQuestion];
  const correctAnswer = quizData[currentQuestion].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    alert(`Answer is Correct!!`);
  } else {
    alert(`Incorrect! The correct answer is ${correctAnswer}`);
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
}
loadQuestion();
