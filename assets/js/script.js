var timeDisplayEl = document.querySelector("#time-display")  

timeDisplayEl.textContent = moment().format("MMM Do YY");

var userInput = document.getElementById('task-text');
var saveInput = document.getElementById('btn1');

saveInput.addEventListener("click", function() {
    console.log(userInput.value)
})

console.log(userInput)

