let userInput

// adds an event listener to the button, calls function "checker" when pressed.
document.getElementById('button').addEventListener('click', checker)

function checker () {
  // obataining and converting user input to integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
  // checks if user input is less than zero, in which case it displays "negative", otherwise it displays "positive"
  if (userInput < 0) {
    document.getElementById('result').innerHTML = 'Negative'
  } else {
    document.getElementById('result').innerHTML = 'Positive'
  }
}
