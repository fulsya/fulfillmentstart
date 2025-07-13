// Quiz data
const questions = [
  {
    question: "What does JS stand for?",
    options: ["JavaScript", "JellyScript", "JustStyle", "Java Setup"],
    answer: "JavaScript"
  },
  {
    question: "Which symbol is used for ID in CSS?",
    options: ["#", ".", "@", "*"],
    answer: "#"
  },
  {
    question: "Which method is used to print something to the console?",
    options: ["print()", "log()", "console.log()", "display()"],
    answer: "console.log()"
  },
  {
    question: "Which keyword is used to declare a variable?",
    options: ["set", "make", "let", "define"],
    answer: "let"
  },
  {
    question: "What is the correct way to write a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc()",
      "fun myFunc[]",
      "create myFunc()"
    ],
    answer: "function myFunc() {}"
  },
  {
    question: "What does 'innerHTML' do?",
    options: [
      "Prints text to console",
      "Adds new <script> tag",
      "Changes HTML content of an element",
      "Creates alert popup"
    ],
    answer: "Changes HTML content of an element"
  },
  {
    question: "Which one is a boolean value?",
    options: ["'true'", "yes", "0", "true"],
    answer: "true"
  },
  {
    question: "What is the output of alert(5 + '5')?",
    options: ["10", "55", "TypeError", "'10'"],
    answer: "55"
  },
  {
    question: "Which operator checks both value and type?",
    options: ["=", "==", "===", "!="],
    answer: "==="
  },
  {
    question: "Which event runs when you click a button?",
    options: ["onhover", "oninput", "onclick", "onsubmit"],
    answer: "onclick"
  }
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");
const eraseButton = document.getElementById("erase-btn");
function showQuestion() {
  const current = questions[currentQuestion];
  questionElement.innerText = current.question;

  answerButtons.forEach((btn, index) => {
    btn.innerText = current.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#4CAF50";

    btn.onclick = function () {
      if (btn.innerText === current.answer) {
        score++;
        btn.style.backgroundColor = "green";
      } else {
        btn.style.backgroundColor = "red";
      }

      // Disable all after answer
      answerButtons.forEach(b => b.disabled = true);
    };
    resetButton.onclick = function () {
      answerButtons.forEach(btn => {
        btn.disabled = false;
        btn.style.backgroundColor = "#4CAF50";
    });
  
    }

  });

  resultElement.innerText = "";
}




nextButton.onclick = function () {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionElement.innerText = "Quiz Completed!";
    document.getElementById("answers").style.display = "none";
    nextButton.style.display = "none";
    resetButton.style.display = "none";
    resultElement.innerText = `Your score: ${score} / ${questions.length}`;
  }
};
eraseButton.onclick = function () {
    currentQuestion = 0;
    score = 0;
    showQuestion();

};
// Start quiz
showQuestion();
