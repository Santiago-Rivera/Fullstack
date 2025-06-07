function checkAnswer1() {
    const userAnswer = document.getElementById('answer1').value.toLowerCase();
    const correctAnswer = 'aliceblue';
    
    if (userAnswer === correctAnswer) {
        document.getElementById('result1').textContent = 'Correct!';
        document.getElementById('result1').style.color = 'green';
    } else {
        document.getElementById('result1').textContent = 'Incorrect. Try again!';
        document.getElementById('result1').style.color = 'red';
    }
}

function checkAnswer2() {
    const userAnswer = document.getElementById('answer2').value.toLowerCase();
    const correctAnswer = '3rem';
    
    if (userAnswer === correctAnswer) {
        document.getElementById('result2').textContent = 'Correct!';
        document.getElementById('result2').style.color = 'green';
    } else {
        document.getElementById('result2').textContent = 'Incorrect. Try again!';
        document.getElementById('result2').style.color = 'red';
    }
}

function checkAnswer3() {
    const userAnswer = document.getElementById('answer3').value.toLowerCase();
    const correctAnswer = '500';
    
    if (userAnswer === correctAnswer) {
        document.getElementById('result3').textContent = 'Correct!';
        document.getElementById('result3').style.color = 'green';
    } else {
        document.getElementById('result3').textContent = 'Incorrect. Try again!';
        document.getElementById('result3').style.color = 'red';
    }
}

function checkAnswer4() {
    const userAnswer = document.getElementById('answer4').value.toLowerCase();
    const correctAnswer = 'arial, sans-serif';
    
    if (userAnswer === correctAnswer) {
        document.getElementById('result4').textContent = 'Correct!';
        document.getElementById('result4').style.color = 'green';
    } else {
        document.getElementById('result4').textContent = 'Incorrect. Try again!';
        document.getElementById('result4').style.color = 'red';
    }
}