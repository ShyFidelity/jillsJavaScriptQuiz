//elements to get from the document 
//Selects elements by class
var startBtn = document.querySelector('#start-button')
const timeLeft = document.querySelector('#seconds-left')
var questionContent = document.querySelector('#question')
let timeStart = 60;

let randomQuestion = []
let questionsAll = [
    {question: "How do you nest objects inside Arrays?",
    answer1:"a",
    answer2:"b",
    answer3:"c",
    answer4:"d",
    answer: 1
    },

    {
    question: "Will I need if else statements to get the click to work",
    answer1:"a",
    answer2:"b",
    answer3:"c",
    answer4:"d",
    answer: 2
    },

    {
    question: "q3",
    answer1:"a",
    answer2:"b",
    answer3:"c",
    answer4:"d",
    answer: 2
        },

    { 
    question: "q4",
    answer1:"a",
    answer2:"b",
    answer3:"c",
    answer4:"d",
    answer: 4
            
    } ]

// let questionsAll = [question1, question2, question3, question4]



//timer begins when clicked 
function countDown() {
    var timeInterval = setInterval(function () {
            timeStart--;
            timeLeft.textContent = timeStart; 
            if (timeStart <= 0){
            clearInterval(timeInterval);
            }
    }, 1000);
    }


//increase idex of question after click 
//get new question get the answers 


function getNewQuestion() {
   const newIndex = questionsAll[Math.floor(Math.random()*questionsAll.length)];
   //remove new question from the array 
   return newIndex
}


function startGame() {
    const newIndex = questionsAll[Math.floor(Math.random()*questionsAll.length)];
    //remove new question from the array 
    questionContent.textContent = newIndex
    //remove new question from the array 
   
    }  


      

    

startBtn.addEventListener('click',() => {    
    countDown();   
    getNewQuestion();
     
});





    // let text = document.getElementById('.question').textContent;
// function StartGame() {

// const questions = [
//     {
//         question: 'whats your name'
//         answer: [
//             {Text: 'kate' correct: false}, 
//             { text: 'jill' correct: true}
//         ]
//     }
// ]

// }



// //make a function that when you click a choice you loose -15 seconds
// var answersEl = document.querySelector(".answer")

// answersEl.addEventListener("click", function(event){
//     var element = event.target;

//     if (element.matches())
// })










// let questionEl = []
// let correctAnswers = true 
// let score = 0
// let questionCounter = 0 
// let availableQuestions = []







//create a quiz with buttons 
//
//variables 
    //you will need ids and query selectors 

//functions 
    //create a timer that looses time when an answer is wrong
    //deduct 10 seconds if you get an answer wrong 

    //event listeners

    // need questions need to find the correct answer 
    //store all the questions and answers in an array 
    // WILL NEED AN ARRAY OF OBJECTS 
    //available array 
    //each of your questions would be an object 
    //object would have 3 properties 
    //strign thats the question 
    ///aray of answer list
    //array of the correct answer 

    //function just has one task update display all based of of the click 
    

    //how to automatically refresh you 
    // you would want to use inner html and take tags create a string that's a div
    //that has a paragraph that the questions and a list with the answers send 
    //textContent to replace the html 



    //need data attribute for display 



//will need event listeners 

//if else statements && for correct answer */