//elements to get from the document 
//Selects elements by class
const startBtn = document.querySelector('#start-button')
const timeLeft = document.querySelector('#seconds-left')
var questionContent = document.querySelector('#question')
let choiceContent1 = document.querySelector("#choice1")
let choiceContent2 = document.querySelector("#choice2")
let choiceContent3 = document.querySelector("#choice3")
let choiceContent4 = document.querySelector("#choice4")
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
    question: "What does the .splice() method do?",
    choice: ["cuts arrays in half","cuts objects of an array in half","doubles all objects in an array","changes the contents of an array by removing or replacing existing elements"],
    correctAnswer: "changes the contents of an array by removing or replacing existing elements"
    },

    {
    question: "How can you find how many items are in an Array",
    choice: ["by surrounding them with ()","count them","use array.length","use array.count"],
    correctAnswer: "use array.count"
    },

    {
    question: "Which of the following is true?",
    choice: ["booleans are true/false data types","a string is data type with text in quotes","objects can contain multiple properties","all of the above"],
    correctAnswer: "all of the above"} ]
   


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
    //if not true this will not render 
    if (questionsAll.length <= index)
    return 

    getRandomQuestion()      
})

choiceContent3.addEventListener('click', function(){
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
    
})

choiceContent4.addEventListener('click', function(){
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
        
})

