const quiz = [
  {
    question: "What is the full form of HTML?",
    options: ["Hyper Text Markup Language", "CSS", "Java"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "In which language is used to designing a web page?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "In which language is used to create a logic in web page ?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "CSS stands for ?",
    options: ["Hypertext markup language", "Cascading style sheet", "JavaScript"],
    answer: "Cascading style sheet"
  },
  {
    question: "which keyword declare a variable in javascript?",
    options: ["int", "let", "define"],
    answer: "let"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

  // Question show karna
  document.getElementById("question").innerText =
    quiz[currentQuestion].question;

  // Options show karna
  let html = "";

  for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
    html += `
      <button onclick="checkAnswer('${quiz[currentQuestion].options[i]}')">
        ${quiz[currentQuestion].options[i]}
      </button><br>
    `;
  }

  document.getElementById("options").innerHTML = html;
}

function checkAnswer(selectedOption) {

  if (selectedOption === quiz[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Complete";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText =
      "Score: " + score + "/" + quiz.length;
  }
}

loadQuestion();