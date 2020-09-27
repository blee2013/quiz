// # 04 Web APIs: Code Quiz

// As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple - choice questions and interactive challenges.Build a timed code quiz with multiple - choice questions.This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// variables for quiz
var time = questions.length * 10;
var timerId;
var questionstart = 0;

var questions = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var optionsEl = document.getElementById("options")
var rightwrongEl = document.getElementById("rightwrong");
var nameEl = document.getElementById("name");
var submitEl = document.getElementById("submit");
var startbuttonEl = document.getElementById("start-button");
var tryagainbuttonEl = document.getElementById("tryagainbutton");

// WHEN I click the start button

// function to start quiz
function startQuiz() {
    var startbuttonEl = document.getElementById("start-page");

    timerId = setInterval(1000);

    getQuestion();
}
   //button to start quiz
   startButton.onclick = function() {
       showQuiz (questions, options);
   }


    

    // Connect button from html here
    

    // high score- permanant or final screen 

    // countdown timer
        // 1. countdown

        // 2. Stop the quiz
        // 3. Lose time

// THEN a timer starts and I am presented with a question
        //* DON'T USE A LOOP

// WHEN I answer a question
    // Add 3 questions are multiple-choice
    // array with a var for the correct answer


// THEN I am presented with another question


//Questions
Var questions = [
    {
    question: "What is the name of my puppy?",
    options: ["Coachella", "King T'Challa", "Chalupa", "Cafe Mocha"],
    answer: "King T'Challa"
    },
    {
    question: "Which of the following places has the best Tacos?"
    options: ["The Ohio", "Chipotle", "Bar Taco", "La Bamba"],
    answer: "The Ohio"
    },
    {
    question: "Which is the best Christman movie?"
    options: ["White Christmas", "The Grinch Who Stole Christmas", "Santa Claus", "Frosty the Snowman"],
    answer: "The Grinch Who Stole Christmas"
    },
    {
    question: "What is the best kind of pie?"
    options: ["Pumpkin Pie", "Apple Pie", "Cherry Pie", "Sweet Potatoe Pie"],
    answer: "Pumpkin Pie"
    },
    {   
    question: "Which is the best flavored pop?"
    options: ["Grape", "Orange", "Pineapple", "Lime"],
    answer: "Grape"
    },
    {
    question: "Which of these is best with chips?"
    options: ["Salsa", "Guacamole", "Bean Dip", "Queso"],
    answer: "Queso"
    },
    {
    question: "Which of this is best to put on first?"
    options: ["Shirt", "Pants", "Socks", "Gloves"],
    answer: "Socks"
    }
];

    // ideas: funtion and return
    // switch
    // double array var codequestion = {question; answer} 
            // {
            //     question: "Commonly used data types do NOT inclue:",
            //         answers: {
            //         1: "strings",
            //             2: "booleans",
            //                 3: "alerts",
            //                     4: "numbers",
            //      },
            //     rightAnswer: "3"
            // },
        // connect button to correct answer


// If question is correct
    //add event listener to check button- goes to next question 
    // feedback "Correct"


// WHEN I answer a question incorrectly
    // time is subtracted from the clock 
    // feedback "Wrong"
    // if !== deduct time x from timer
    // *optional: if time is less than zero add if (time < 0)

// THEN time is subtracted from the clock
    // deduct x sec from clock 
    // move to next question
    // Out of time .. end quiz

// WHEN all questions are answered or the timer reaches  0
    // Display: "Quiz Complete"
    // Display Score
    // Add place to enter intials 
    // Add Submit button
    // Add "Try Again" Button

// THEN I can save my initials and score

     //Connect to local stoarge

     //get user initials

     // commit user initials & high score

     // Display all high scores





