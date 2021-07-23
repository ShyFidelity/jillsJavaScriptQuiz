//elements to get from the document
//Selects elements by class
const startBtn = document.querySelector("#start-button");
const timeLeft = document.querySelector("#seconds-left");
var questionContent = document.querySelector("#question");
let choiceContent1 = document.querySelector("#choice1");
let choiceContent2 = document.querySelector("#choice2");
let choiceContent3 = document.querySelector("#choice3");
let choiceContent4 = document.querySelector("#choice4");
let timeStart = 60;

//global var allows ++
var index = 0;
let randomQuestion = [];
let questionsAll = [
  {
    question: "How do you store objects inside arrays?",
    choice: [
      "by surrounding them with ()",
      "by using {} and ,",
      "you cannot store objects in arrays",
      "surround every word in []",
    ],
    correctAnswer: "by using {} and ,",
  },

  {
    question: "What does the .splice() method do?",
    choice: [
      "cuts arrays in half",
      "cuts objects of an array in half",
      "doubles all objects in an array",
      "changes the contents of an array by removing or replacing existing elements",
    ],
    correctAnswer:
      "changes the contents of an array by removing or replacing existing elements",
  },

  {
    question: "How can you find how many items are in an Array",
    choice: [
      "by surrounding them with ()",
      "count them",
      "use array.length",
      "use array.count",
    ],
    correctAnswer: "use array.length",
  },

  {
    question: "Which of the following is true?",
    choice: [
      "booleans are true/false data types",
      "a string is data type with text in quotes",
      "objects can contain multiple properties",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
];

//timer begins when clicked
var timeInterval;

function countDown() {
  timeInterval = setInterval(function () {
    timeStart--;
    timeLeft.textContent = timeStart;
    if (timeStart <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

// function stopWatch {
//         clearTimeout(countDown(stopWatch));
//         if (timeStart <= 0)}

//increase idex of question after click
//get new question get the answers

function getRandomQuestion() {
  //remove new question from the array
  var newIndex = questionsAll[index];
  console.log(newIndex);
  //var displayQuestion= questionsAll.splice(newIndex, 1);
  questionContent.innerText = newIndex.question;
  choiceContent1.innerText = newIndex.choice[0];
  choiceContent2.innerText = newIndex.choice[1];
  choiceContent3.innerText = newIndex.choice[2];
  choiceContent4.innerText = newIndex.choice[3];
  //overides the value of the html so we can get an answer(true)
  //button has text but no value
  //.value gives button a value since html has no value
  choiceContent1.value = newIndex.choice[0];
  choiceContent2.value = newIndex.choice[1];
  choiceContent3.value = newIndex.choice[2];
  choiceContent4.value = newIndex.choice[3];


}

startBtn.addEventListener("click", function () {
  countDown();
  getRandomQuestion();
});

choiceContent1.addEventListener("click", function () {
  if (questionsAll[index].correctAnswer === choiceContent1.value) {
    index++;
  } else if (questionsAll[index].correctAnswer !== choiceContent1.value) {
    timeStart = timeStart - 10;
    index++;
  }
  //if not true this will not render
  if (index < questionsAll.length) {
    return getRandomQuestion();
  } else {
    clearInterval(timeInterval);
  }
});
choiceContent2.addEventListener("click", function () {
  if (questionsAll[index].correctAnswer === choiceContent2.value) {
    index++;
  } else if (questionsAll[index].correctAnswer !== choiceContent2.value) {
    timeStart = timeStart - 10;
    index++;
  }
  //if not true this will not render;
  if (index < questionsAll.length) {
    return getRandomQuestion();
  } else {
    clearInterval(timeInterval);
  }
});

choiceContent3.addEventListener("click", function () {
  if (questionsAll[index].correctAnswer === choiceContent3.value) {
    index++;
  } else if (questionsAll[index].correctAnswer !== choiceContent3.value) {
    timeStart = timeStart - 10;
    index++;
  }
  //if not true this will not render;
  if (index < questionsAll.length) {
    return getRandomQuestion();
  } else {
    clearInterval(timeInterval);
  }
});

choiceContent4.addEventListener("click", function () {
  if (questionsAll[index].correctAnswer === choiceContent4.value) {
    clearInterval(timeInterval);
  } else if (questionsAll[index].correctAnswer !== choiceContent4.value) {
    timeStart = timeStart - 10;
  }
  //if not true this will not render;
  if (index < questionsAll.length) {
    return getRandomQuestion();
  } else if (index < questionsAll.length){
    clearInterval(timeInterval);
    localStorage.setItem("finalTime", timeStart);
    //key final time equal 
  } 
  
  //
  //want to go to the high score page and store countDown var 
});
