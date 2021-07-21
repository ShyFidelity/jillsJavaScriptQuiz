//elements to get from the document 
//Selects elements by class
const startBtn = document.querySelector('#start-button')
const timeLeft = document.querySelector('#seconds-left')
var questionContent = document.querySelector('#question')
let choiceContent1 = document.querySelector(".choice1")
let choiceContent2 = document.querySelector(".choice2")
let choiceContent3 = document.querySelector(".choice3")
let choiceContent4 = document.querySelector(".choice4")
let timeStart = 60;

//global var allows ++
var index = 0
let randomQuestion = []
let questionsAll = [
    {question: "How do you store objects inside arrays?",
    choice: ["by surrounding them with ()","by using {} and ,","surround every word in []","you cannot store objects in arrays"],
    correctAnswer: "by using {} and ,"
    },

    {
    question: "Will I need if else statements to get the click to work",
    choice: ["a","b","c","d"],
    correctAnswer: ["b"]
    },

    {
    question: "How do you store objects inside arrays?",
    choice: ["by surrounding them with ()","by using {} and ,","surround every word in []","you cannot store objects in arrays"],
    correctAnswer: "by using {} and ,"
    },

    {
    question: "How do you store objects inside arrays?",
    choice: ["by surrounding them with ()","by using {} and ,","surround every word in []","you cannot store objects in arrays"],
    correctAnswer: "by using {} and ,"} ]
   


console.log(questionsAll.answer1)
console.log(questionsAll[0].question)
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


function getRandomQuestion() {
    //remove new question from the array 
   var newIndex = questionsAll[index];
   //var displayQuestion= questionsAll.splice(newIndex, 1);
   questionContent.innerText = newIndex.question;
   choiceContent1.innerText = newIndex.choice[0];
   choiceContent2.innerText = newIndex.choice[1];
   choiceContent3.innerText = newIndex.choice[2];
   choiceContent4.innerText = newIndex.choice[3];
//overides the value of the html so we can get an answer(true)
//button has text but no value 
//.value gives button a valuehtml has no value 
   choiceContent1.value = newIndex.choice[0];
   choiceContent2.value = newIndex.choice[1];
   choiceContent3.value = newIndex.choice[2];
   choiceContent4.value = newIndex.choice[3];

   console.log(newIndex)
   console.log(choiceContent1.value)


}
//everything is an object need to find an index then you can go into the object of that index

function startGame() {

    //once I get the question to display the choices will have to be able to be clicked on
    //i will need to separate these from the question 
    //i will create an if else statement if the the answer choice is true
    if (questionsAll > 0) {
    
    }
   
    }  


      

    

startBtn.addEventListener('click',function() {    
    countDown();   
    getRandomQuestion();
     
});

choiceContent1.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent1.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent1.value){
    timeStart = timeStart - 10;
    index++;
    } 
    //if not true this will not render 
    if (questionsAll.length <= index)
    return 

    getRandomQuestion() 
    //go to hs page? 
//doesn't exist nowhere    
})
choiceContent2.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent1.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent1.value){
    timeStart = timeStart - 10;
    index++;
    } 

    getRandomQuestion()   
//doesn't exist nowhere    
})

choiceContent3.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent1.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent1.value){
    timeStart = timeStart - 10;
    index++;
    } 

    getRandomQuestion()   
//doesn't exist nowhere    
})

choiceContent4.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent1.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent1.value){
    timeStart = timeStart - 10;
    index++;
    } 

    getRandomQuestion() 
    
    
//doesn't exist nowhere    
})


//set item 
//get item 



//stop index after 4 
//store highscores here in highscore page we will retrieve 

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
    ///array of answer list
    //array of the correct answer 

    //function just has one task update display all based of of the click 
    

    //how to automatically refresh you 
    // you would want to use inner html and take tags create a string that's a div
    //that has a paragraph that the questions and a list with the answers send 
    //textContent to replace the html 



    //need data attribute for display 



//will need event listeners 

//if else statements && for correct answer */