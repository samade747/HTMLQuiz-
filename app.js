 
 // JavaScript code goes here
 function checkAnswer(questionNumber) {
    var answer = document.querySelector('input[name="q' + questionNumber + '"]:checked');
    var result = document.getElementById('result' + questionNumber);
    
    if (answer && answer.value === 'c') {
        result.textContent = 'Correct!';
    } else {
        result.textContent = 'Incorrect. Try again.';
    }
}