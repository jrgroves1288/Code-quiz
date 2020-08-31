const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const timeEl = document.querySelector("")
const scoresMenu = document.getElementById('scores-menu');
const backToStartLink = document.getElementById('back-to-start-link');
const viewHighScoresLink = document.getElementById('high-scores-link');

startGame()
function startGame() {
    startButton.addEventListener("click", startGame)
    startButton.classList.add("hide");
	shuffledQuestions = questions.sort(() => Math.random() - .5);
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove("hide");
	setNextQuestion()
}

startMenu.setAttribute("style", "display: none;");
scoresMenu.setAttribute("style", "display: none;");
choicesContent.setAttribute("style", "display: block");
enterInitialsMenu.setAttribute("style", "display: none;");
choicesContent.innerHTML = " ";
viewHighScoresLink.setAttribute("style", "display: none;");

function setTime() {
	var timerInterval = setInterval(function() {
	  secondsLeft--;
	  timeEl.textContent = secondsLeft;
  
	  if(secondsLeft === 0) {
		clearInterval(timerInterval);
		sendMessage();
	  }
  
	}, 1000);
  }

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
    	const button = document.createElement("button");
    	button.innerText = answer.text;
    	button.classList.add("btn");
    	if (answer.correct) {
    		button.dataset.correct = answer.correct
    	}
    	button.addEventListener("click", selectAnswer)
    	answerButtons.appendChild(button);
    })
}

function answerSelect(){
if choices => answer
alert("you got it");
else
alert("sorry but that is incorrect");  

}

function resetState() {
	nextButton.classList.add("hide");
	while (answerButtons.firstChild) {
		answerButtons.removeChild;
		(answerButtons.firstChild);
	}
}

function selectAnswer(e) {

}

var questions = [
    {
      title: "What is the Capital of Wyoming?",
      choices: ["Cheyenne", "W", "Arkansas", "Zimbabwai"],
      answer: "W"
    },
    {
      title: "What is your name?",
      choices: ["arthur, king of the Brits", "Billy", "Patsy", "whats a name?"],
      answer: "arthur, king of the Brits"
    },
    {
      title: "What is your quest",
      choices: ["I seek the holy grail", "to save a bunch of money on my Car insurance", "to lower my cholesteral", "To become a Pokemon Master"],
      answer: "I seek the holy grail"
    }, 
    {
      title: "What is your favorite color",
      choices: ["Green", "Violet", "Blue", "Shartruse"],
      answer: "Blue"
    }, 
    {
      title: "Who is the Greatest Footbal Team",
      choices: ["Saints", "Patriots", "Panthers", "Washington Football team"],
      answer: "Panthers"
    }
  ];

