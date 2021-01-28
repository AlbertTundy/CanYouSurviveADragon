var quizQuestions = [{
    title: "An angry red dragon just landed in front of your house what do you do?",
    choices: ["Run out the back!", "Hide in the basement!", "Supplicate yourself and offer it all of your belongings in exchange for your life.", "Attempt to seduce the dragon."],
    answer: "Attempt to seduce the dragon."
  },
  {
    title: "Your party meets a beggar on the road and after your barbarian tells him to bugger off it's revealed he's a Silver dragon in disguise! What do you do? ",
    choices: ["Run out the back!", "Hide in the basement!", "Supplicate yourself and offer it all of your belongings in exchange for your life.", "Attempt to seduce the dragon."],
    answer: "Attempt to seduce the dragon."
  },
  {
    title: "You're climbing down an abandoned mine shaft when a sudden blast of cold air throws you from the wall. After falling a short distance you find yourself face to face with White dragon. What do you do?",
    choices: ["Run out the back!", "Hide in the basement!", "Supplicate yourself and offer it all of your belongings in exchange for your life.", "Attempt to seduce the dragon."],
    answer: "Attempt to seduce the dragon."
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["Run out the back!", "Hide in the basement!", "Supplicate yourself and offer it all of your belongings in exchange for your life.", "Attempt to seduce the dragon."],
    answer: "Attempt to seduce the dragon."
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices:["Run out the back!", "Hide in the basement!", "Supplicate yourself and offer it all of your belongings in exchange for your life.", "Attempt to seduce the dragon."],
    answer: "Attempt to seduce the dragon."
  }]

var currentQuestionIndex = 0;
var time = quizQuestions.length * 20;
var timerId;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var start = document.getElementById("beginGame")
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreen = document.getElementById("start-screen")
//variables
start.onclick= beginGame
// a timer that will project a you lose screen if it counts down to 0 before you finish the quiz. It will also need to begin and reset once the start quiz button is pressed. 
function trackTime () {
    time--;
    timerEl.textContent= time
    if (time <= 0) {
    alert("Quiz is over") 
    
    //quiz end function goes here.  
    }

}
//start quiz function 
function beginGame(){
    startScreen.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    timerId = setInterval(trackTime, 1000)
    timerEl.textContent = time
    getQuestions()
}
//get question function
function getQuestions () {
    var currentQuestion = quizQuestions[currentQuestionIndex]
    var title = document.getElementById("question-title")
    title.textContent = currentQuestion.title
    currentQuestion.choices.forEach(function(choice, i ){
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("class", "choice")
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = i + 1 + " " + choice
        choiceButton.onclick = answerClick 
        choicesEl.appendChild(choiceButton)
    })

}


function answerClick() {
    if (currentQuestionIndex >= quizQuestions.length){
        winCondition()
    }
    else if (this.value !== quizQuestions[currentQuestionIndex].answer) {
        time = time - 10 
        timerEl.textContent = time
        feedbackEl.setAttribute("class", "feedback")
        feedbackEl.textContent = "you are wrong."


    } else {feedbackEl.textContent = "you're right!"
    feedbackEl.setAttribute("class", "feedback")
    currentQuestionIndex++
    choicesEl.textContent = ""
    getQuestions()   
    console.log(quizQuestions.length)
    console.log(currentQuestionIndex)
}

}
function winCondition() {
localStorage.setItem("finalScore", time)
alert()


}
// localStorage.length
// localStorage.getItem("finalScore")
// //check question function that can add to timer or move to next question or win game
//function checks if guess was right or wrong.
//a you lose function that will trigger when time runs out that will run a message. 

//quiz end function. Stop the timer. Hide questions and give a victory message. 

//save highscores keeps the score "time" and adds to local storage and draws from local storage. 
//clear interval(timerid) quiz end  