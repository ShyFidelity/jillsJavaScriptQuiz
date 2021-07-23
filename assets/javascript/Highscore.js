
const nameInput = document.querySelector("#namePh");
const displayNameSpan = document.querySelector("#userName")
const finalScore = document.querySelector("#highscores")

//stored in global so it can be called again 
showName()

function showName() {
    var nameStored = localStorage.getItem("namePh");

    if (!nameStored) {
        return;
      }
        
    displayNameSpan.textContent = nameStored;  

}
    

nameHsInput.addEventListener('keypress', function(event) {
    event.preventDefault();
    var nameHsInput = document.querySelector('#userName').value;
    if (event.key === 'Enter') {

    localStorage.setItem("userName",nameHsInput);

    showName()
    }
});


//couldn't quite get this page to work..
//I referenced several videos and the activities from last week but had no luck 
var finalTime = localStorage.getItem("finalTime", finalTime);
finalTime.textContent = finalTime;