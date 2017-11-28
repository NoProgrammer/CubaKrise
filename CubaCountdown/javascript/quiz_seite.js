/* Question function */
function question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

/* Quiz controller */
function quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

quiz.prototype.hasEnded = function() {
    return this.questions.length === this.questionIndex;
}

quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    else {
    	total_seconds = total_seconds - 10;
    }

    this.questionIndex++;
}

/* Application */
function populate() {
    if(quiz.hasEnded()) {
        showScore();
    }
    else {
        // Fragen zeigen
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // Möglichkeiten zeigen
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function showScore() {
    var gameOverHtml = "<h1 id='headline'>Punkteanzahl</h1>";
    gameOverHtml += "<h2 id='score'>Dein Ergebnis: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Frage " + currentQuestionNumber + " von " + quiz.questions.length + ":";
}

var questions = [
    new question("Kubakrise ist nice?", ["Ja", "Nein", "Keine Ahnung!", "Hilfe"], "Nein"),
    new question("Macht ein Quiz Spaß?", ["Ja", "Hallo", "Keine Ahnung!", "Hilfe"], "Keine Ahnung!"),
    new question("Habe ich schon Fragen?", ["Ja", "Nein", "Keine Ahnung!", "Hilfe"], "Nein"),
    new question("Will ich das machen?", ["Ja", "Nein", "Keine Ahnung!", "Hilfe"], "Hilfe"),
    new question("Ist das ein Lorem Ipsum", ["Ja", "Nein", "Keine Ahnung!", "Hilfe"], "Ja")
];

var quiz = new quiz(questions);

populate();

/* Timer Controls */

var total_seconds = 60*2;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function checkTime() {
	document.getElementById("quiz-time-left").innerHTML = 'Zeit übrig: ' + c_minutes + 'm:' + c_seconds + 's';
	if(total_seconds <= 0) {
		showScore();
	}
	else {
		total_seconds = total_seconds - 1;
		c_minutes = parseInt(total_seconds/60);
		c_seconds = parseInt(total_seconds%60);
		setTimeout("checkTime()", 1000);
	}
}
setTimeout("checkTime()", 1000);

