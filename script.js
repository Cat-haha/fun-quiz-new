let googleSignIn = document.getElementById("googleSignIn");
let test = document.getElementById("test");
let sectionInd = document.getElementById("sectionInd");
let title = document.getElementById("title");
let startButton = document.getElementById("startButton");
let instructions = document.getElementById("instructions");
let started = false;
let forwardButton = document.getElementById("forwardButton");
let tellme = document.getElementById("tellme");
let question = document.getElementById("question");
let questionImage = document.getElementById("questionImage");
let questionAnswer = document.getElementById("questionAnswer");
let hintImage = document.getElementById("hintImage");
let feedbackImage = document.getElementById("feedbackImage");
let answerButton = document.getElementById("answerButton");
let answerField = document.getElementById("answerField");
let nextButton = document.getElementById("nextButton");
let scoreP = document.getElementById("scoreP");
let timeWarning = document.getElementById("timeWarning");
let popup = document.getElementById("popup");
let closeButton = document.getElementById("closeButton");
popup.style.display = "none";
closeButton.style.display = "none";
let ableToAnswer = true;
let ableToContinue = false;
let inbetween = false;
let correct = false;
const mathSectionIndex = 20;
let enterPressed = 0;
let currentQuestion = 0;
let attempts = 0;
let score = Number(localStorage.getItem("score")) || 0;

function setScore(value) {
  score = value;
  localStorage.setItem("score", score);
}

function goForward() {
  ableToContinue = true;
  inbetween = false;
  goToNextIndex();
}

function startQuiz() {
  setScore(0);
  started = true;
  loadQuiz();
}

function loadQuiz() {
  if (started === true) {
    startButton.style.display = "none";
    question.style.display = "block";
    questionImage.style.display = "flex";
    questionAnswer.style.display = "none";
    feedbackImage.style.display = "none";
    answerField.style.display = "block";
    hintImage.style.display = "none";
    answerButton.style.display = "block";
    instructions.innerHTML =
      "Follow the controls. It's pretty self-explainatory...";
    question.innerHTML = questionsArray[currentQuestion].question;
    questionImage.src = questionsArray[currentQuestion].image;
    questionAnswer.innerHTML = questionsArray[currentQuestion].answer;
    feedbackImage.src = questionsArray[currentQuestion].feedbackImage;
  }
}

function submitAnswer() {
  let userAnswer = answerField.value.toLowerCase();

  // IF ANSWER IS CORRECT

  if (ableToAnswer === true) {
    if (questionsArray[currentQuestion].answer.includes(userAnswer)) {
      correct = true;
      inbetween = true;
      ableToAnswer = false;
      feedbackImage.style.display = "block";
      questionAnswer.style.display = "block";
      questionAnswer.innerHTML = `CORRECT! The answer was ${questionsArray[currentQuestion].answer[0]}`;
      setScore(score + 1);
    } else {
      // IF ANSWER IS INCORRECT
      attempts++;

      if (attempts >= 2) {
        if (currentQuestion === 10) {
          questionAnswer.innerHTML = `It's not ${userAnswer}! It's ${questionsArray[currentQuestion].answer[0]}`;
        } else {
          questionAnswer.innerHTML = `Incorrect. The answer was ${questionsArray[currentQuestion].answer[0]}`;
        }
        ableToAnswer = true;
        inbetween = true;
      } else {
        if (!correct)
          if (currentQuestion === 10) {
            questionAnswer.style.display = "block";
            hintImage.style.display = "block";
            questionAnswer.innerHTML = "HINT: It's not lettuce";
            hintImage.src = questionsArray[currentQuestion].hintImage;
          } else {
            questionAnswer.style.display = "block";
            questionAnswer.innerHTML =
              "Incorrect, You have ONE attempt remaining";
          }
      }
    }
  }
}

function openPopup() {
  popup.style.display = "flex";
  closeButton.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  closeButton.style.display = "none";
}

function nextQuestion() {
  if (inbetween === true) {
    ableToContinue = true;
    inbetween = false;
    goToNextIndex();
  }
}

function goToNextIndex() {
  if (currentQuestion === 18) {
    sectionInd.innerHTML = "You are now in the Math Section";
    title.innerHTML = "Math Section";
    openPopup();
  } else if (currentQuestion === 34) {
    sectionInd.innerHTML = "You are now in the Reading Section";
    title.innerHTML = "Reading Section";
    openPopup();
  }
  if (ableToContinue === true) {
    if (inbetween === false) {
      feedbackImage.style.display = "none";
      currentQuestion++;
      attempts = 0;
      question.innerHTML = questionsArray[currentQuestion].question;
      questionImage.src = questionsArray[currentQuestion].image;
      feedbackImage.src = questionsArray[currentQuestion].feedbackImage;

      if (questionImage.src === "") {
        questionAnswer.innerHTML = "no image sorry";
      }

      questionAnswer.style.display = "none";
      scoreP.innerHTML = `Your score is: ${score}`;
      correct = false;
      ableToContinue = false;
      ableToAnswer = true;
      answerField.value = "";
      hintImage.style.display = "none";
    }
  }
}
