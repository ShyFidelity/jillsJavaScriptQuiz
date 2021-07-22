
var finalTime = localStorage.setItem("finalTime", finalTime);

finalTime.textContent = finalTime;

const nameInput = document.querySelector("#nameHS");
const displayNameInput = document.querySelector("#nameHsInput")
function showName() {
    var name = localStorage.getItem("nameHS");

    if (!name) {
        return;
    }
    displayNameInput.textContent = name;

}
var nameHsInput = document.querySelector('#nameHsInput')
nameHsInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
     
    displayNameInput.textContent = nameHsInput;
    }
});