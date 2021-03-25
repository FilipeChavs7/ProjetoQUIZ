//Global variables
const MAX_QUESTIONS = 5;
let questionCounter = 0;
let availableQuesions = [];
let currentQuestion = {};
let acceptingAnswers = false;
let mistakes = 0;

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
function closeNav2() {
  document.getElementById("WinnerNav").style.display = "none";
}

function Ajax(url, callback) {
  fetch(url)
    .then(resp => resp.json())
    .then(r => callback(r))
}
const startGame = () => {
  questionCounter = 0;
  availableQuesions = [];
  currentQuestion = {};
  acceptingAnswers = false;
  mistakes = 0;
  Ajax("questions.json", (q) => {
    availableQuesions = [...q]
    getNewQuestion();
  })
};

const getNewQuestion = () => {
  const question = document.getElementById("question");
  const choices = Array.from(document.getElementsByClassName("choice-text"));
  if (mistakes >= 1) {
    //Erra alguma questao e chama o overlay
      document.getElementById("myNav").style.display = "block";

  }
  if (questionCounter >= MAX_QUESTIONS && mistakes == 0) {
    //Acerta todas as questoes e mostra o overlay com parabens e o botão de reiniciar o jogo
      document.getElementById("WinnerNav").style.display = "block";
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  if (question)
    question.innerText = currentQuestion.title;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
  populateQuestion(choices);
};

const populateQuestion = function(choices){
  choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];

      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply == "incorrect") {
        mistakes++;
      }
      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
  });
}