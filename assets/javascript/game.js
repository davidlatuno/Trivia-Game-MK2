// Question object
var question = {

    q1: ["What is the only manmade object that is observable from the moon?", "Me", "The Sun", "The Great Wall", "The not so great wall", 3],

    q2: ["What is the capital of Australia?", "Melbourne", "Sydney", "Cairns", "Canberra", 4],

    q3: ["Name the world's biggest Island", "Hawaii", "Japan", "Greenland", "Philippines", 3],

    q4: ["Who Invented the rabies vaccination?", "Louis Pasteur", "Marie Curie", "Albert Einstein", "Nikola Tesla", 1],

    q5: ["Which artist painted a mustache and goatee on the Mona Lisa?", "Monet", "Manet", "Cordon", "Duchamp", 4],

    q6: ["Give the alternative name for a Mountain Ash tree", "Jabuticaba", "Rowan", "Dragon Blood Tree", "Angel Oak", 2],

    q7: ["Name the country where you would find the Cresta Run", "Switzerland", "India", "Denmark", "Spain", 1],

    q8: ["What is someone who shoes horses called?", "Aptycock", "Clomph", "Farrier", "Hansper", 3],

    q9: ["What is a group of owls called?", "A hoot", "A parliament", "A seer", "A flock", 2],

    q10: ["Which U.S. president made the first presidential radio broadcast?", "Warren G. Harding", "FDR", "Calvin Coolidge", "Herbert Hoover", 3]

}

// Question array
var questionArray = [question.q1, question.q2, question.q3, question.q4, question.q5, question.q6, question.q7, question.q8, question.q9, question.q10];

// Global Variables
var questionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;


// Jquery to populate questions
function next() {
    if (questionIndex <= questionArray.length - 1) {
        seconds = 20;
        start();

        $(".trivia").empty();

        // Print Questions to html
        var newDiv = $("<div>");
        newDiv.text(questionArray[questionIndex][0]);
        newDiv.attr("class", "question");
        $(".trivia").append(newDiv);

        // Print choices to html
        for (var i = 1; i < 5; i++) {
            var newDiv = $("<div>");
            newDiv.text(questionArray[questionIndex][i]);
            newDiv.attr("class", "answer");
            newDiv.attr("value", i);
            $(".trivia").append(newDiv);
        }
        // Reset Timer text
        $("#timer").text("Time Remaining: 20 Seconds");
        $("#timer").css("color", "forestgreen");
    }
}

// Correct answer shown screen
function segue() {

    var segueIndex = questionArray[questionIndex][5];

    $(".trivia").empty();
    $(".trivia").text("The Correct answer was: " + questionArray[questionIndex][segueIndex]);

    questionIndex++;

    // Get next question or if no more questions show stats
    if (questionIndex <= questionArray.length - 1) {
        setTimeout(next, 3000);
    } else {
        setTimeout(statScreen, 3000);
    }
}

function statScreen() {
    // Erase screen and display stats
    $(".trivia").empty();
    $(".trivia").append("<div class='stats'>Correct Answered: " + correctAnswers + "</div.");
    $(".trivia").append("<div class='stats'>Incorrect Answered: " + incorrectAnswers + "</div.");

    // Populate reset button
    $(".trivia").append("<button type='button' class='btn btn-default'>Reset</button>");
}

next();

$(document).ready(function () {

    // Answer clicks
    $(".trivia").on("click", ".answer", function () {
        var val = parseInt($(this).attr("value"));
        if (val === questionArray[questionIndex][5]) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        clearInterval(timer);
        segue();
    })

    // Reset quiz
    $(".trivia").on("click", ".btn", function () {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionIndex = 0;

        next();
    })

})


// Timer Code
var seconds = 20;
var timer;

function start() {
    timer = setInterval(countDown, 1000);
}

function countDown() {
    seconds--;
    $("#timer").text("Time Remaining: " + seconds + " Seconds");
    if (seconds > 10) {
        $("#timer").css("color", "forestgreen");
    } else {
        $("#timer").css("color", "crimson");
    }
    if (seconds === 0) {
        incorrectAnswers++;
        stop();
        segue();
    }
}

function stop() {
    clearInterval(timer);
}