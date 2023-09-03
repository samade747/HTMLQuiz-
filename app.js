




 // JavaScript code goes here
 function checkAnswer(questionNumber, rightanswer) {
    var answer = document.querySelector('input[name="q' + questionNumber + '"]:checked');
    var result = document.getElementById('result' + questionNumber);
    
    if (answer && answer.value === rightanswer) {
        result.textContent = 'Correct!';
    } else {
        result.textContent = 'Incorrect. Try again.';
    }
}

