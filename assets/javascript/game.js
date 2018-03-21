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


// Timer Code
var seconds = 30;
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
        stop();
    }
}

function stop() {
    clearInterval(timer);
}

start();