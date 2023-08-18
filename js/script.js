// const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const questionElement = document.getElementById("question");
const startButton = document.getElementById('start-button')


var timeLeft = 30;
var scoreBoard = 0
var elem = document.getElementById('Timer');


var timerId = setInterval(countdown, 1000);


function countdown(){


if (timeLeft == 0) {


clearInterval(timerId);




} else{


elem.innerHTML = timeLeft + ' seconds remaining';


timeLeft--;
}
}


var myQuestions = [
{
question: "how would you write 'Hello World!' in an alert box?",
answers: [
'msg("Hello World")',
'alert("Hello World")',
'alertbox("Hello World")',
],
correctAnswer: 'alert("Hello World")'
},
{
question: "inside of which HTML element do we put the java script?",
answers: [
'script',
'scripting',
'javascript',
],
correctAnswer: 'script'
},


{
question: "who invented Javascript?",
answers: [
'Brendan Eich',
'Josh Peck',
'Robb Stark',
],
correctAnswer: 'Brendan Eich'
},


{
question: "What year did they change the name to Javascript from Livescript?",
answers: [
'1979',
'1998',
'2004',
],
correctAnswer: '1998'
},
{
question: "who was president when Java script was invented",
answers: [
'George Bush',
'Barack Obama',
'Bill Clinton',
],
correctAnswer: 'Bill Clinton'
},
];


let currentQuestionIndex = [-1];


nextButton.addEventListener("click", () => {


currentQuestionIndex++;


nextQuestion();


});


function startQuiz() {


currentQuestionIndex = -1;


nextQuestion();


}


function nextQuestion() {


clearAnswerButtons();


if (currentQuestionIndex < myQuestions.length) {


showQuestion(myQuestions[currentQuestionIndex]);


} else {


// Quiz finished
//add a condition to stop my timer afer there are no more questions



clearInterval(timerId);


questionElement.innerText = "Congratulations! Quiz completed.";


nextButton.style.display = "none";


}
}


function showQuestion(question) {






questionElement.innerText = question.question;


question.answers.forEach(answer => {


const button = document.createElement("button");






button.innerText = answer;


button.classList.add("btn");
//add color to button to highlight chosen answer
button.addEventListener("click", () => {
button.style.backgroundColor = 'grey'
checkAnswer(answer)


});


answerButtonsElement.appendChild(button);


});
}
//call function check answer after next button is clicked
function checkAnswer(answer){


if(answer===myQuestions[currentQuestionIndex].correctAnswer){
timeLeft += 10
}
else {


timeLeft -=10
}
}


function clearAnswerButtons() {


while (answerButtonsElement.firstChild) {


answerButtonsElement.removeChild(answerButtonsElement.firstChild);


}
}


// stop timeleft to get score and your enter initals + score into local storage
// use time left as value and add a box for initals to html
// redo git hub repo
