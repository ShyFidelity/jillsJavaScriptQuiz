
const nameInput = document.querySelector("#namePh");
const displayNameSpan = document.querySelector("#userName")
const finalScore = document.querySelector("#highscores")
var nameStored = JSON.parse(localStorage.getItem("scores"))|| [];
var finalTime = localStorage.getItem("finalTime") || 0;
var form = document.getElementById("form")
console.log(form)

function showName() {
    var tempArray = []
   


    if (!nameStored) {
        return;
      }
        
    displayNameSpan.textContent = nameStored;  

}
function displayHS() {
    finalScore.innerHTML = ""
    for (let i = 0; i < nameStored.length; i++) {
    const nameHs = nameStored[i];
    const pEl = document.createElement("p")
    const spanEl = document.createElement("span")
    spanEl.textContent = "intials " + nameHs.intials + " score " + nameHs.highsScore
    pEl.append(spanEl)
    finalScore.append(pEl)
    }
}    

displayHS()
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameHsInput = document.querySelector('#namePh').value;
    console.log("nameHsInput " + nameHsInput)
        var tempObject = {
            intials: nameHsInput, 
            highsScore: finalTime
        }

        nameStored.push(tempObject)
        localStorage.setItem("scores",JSON.stringify(nameStored));
        document.querySelector('#namePh').value = "";
    displayHS()
    }
);

