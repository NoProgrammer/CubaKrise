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
    element.innerHTML = currentQuestionNumber + " / " + quiz.questions.length;
}

var questions = [
    new question("Wann hat die Kubakrise begonnen?", ["16.Oktober 1962", "19.Oktober 1962", "28.Oktober 1962", "14.Oktober 1962"], "16.Oktober 1962"),
    new question("Wann hat die Kubakrise geendet?", ["28.Oktober 1962", "20.Oktober 1962", "26.Oktober 1962", "2.November 1962"], "28.Oktober 1962"),
    new question("Wo stationierte die U.S die Raketenstation? (Nuklearraketen)", ["Italien & Türkei", "Deutschland & Türkei", "Griechenland & Italien", "Ukraine & Deutschland"], "Italien & Türkei"),
    new question("Was ist der 'heiße Draht' bzw. was wird damit gemeint?", ["Zündschnur der Rakete", "Eine Fernbeschreibung zwischen Kreml und dem weißen Haus", "Blockade-Linie der Seeblockade Kubas", "Vertrag über das Verbot von Kernwaffenversuchen"], "Eine Fernbeschreibung zwischen Kreml und dem weißen Haus"),
    new question("Wann begann die Seeblockade Kubas durch die USA?", ["24.Oktober 1963", "26.Oktober 1962", "23.Oktober 1962", "24.Oktober 1962"], "24.Oktober 1962"),
    new question("Welche politische Einstellung hatten USA & UdSSR?", ["Sozialismus & Nationalismus", "Sozialismus & Kommunismus", "Kapitalismus & Kommunismus", "Kapitalismus & Nationalismus"], "Kapitalismus & Kommunismus"),
    new question("Durch welches Ereignis konnte die Sowjetunion Raketen auf Kuba aufbauen?", ["Bürgerkrieg auf Kuba", "Geheimtreffen zwischen Kennedy & Dobrynin", "Fidel Castro kam an die Macht", "Verhandlung über Rüstungskontrolle"], "Fidel Castro kam an die Macht"),
    new question("Welches Land war das Hauptziel der atomaren Mittelstreckenraketen der Sowjetunion im Jahr 1958?", ["Deutschland", "Türkei", "Italien", "England"], "Deutschland"),
    new question("Was ist der nukleare Freischaltcode?", ["QR-Code", "Für einen Atomschlag zwingend erforderlich", "Für Raketenbau erforderlich", "Für ein Tresor"], "Für einen Atomschlag zwingend erforderlich"),
    new question("Was ist bzw. was beinhaltet der Atomkoffer", ["Beinhaltet Atomwaffen", "Reisekoffer der Präsidenten", "Synonym für Stellvertreterkriege", "Beinhaltet nuklearen Freischaltcode"], "Beinhaltet nuklearen Freischaltcode")
];

var quiz = new quiz(questions);

populate();

/* Timer Controls */

var total_seconds = 60*2;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function checkTime() {
	document.getElementById("quiz-time-left").innerHTML = c_minutes + ' ' + c_seconds;
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
setTimeout("checkTime()", 500);

