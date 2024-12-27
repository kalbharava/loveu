let card = document.getElementById("card");
let cake = document.getElementById("cake");
let message = document.getElementById("message");
let finalMessage = document.getElementById("finalMessage");
let birthdayMessage = document.getElementById("birthdayMessage");
let nameInput = document.getElementById("nameInput");
let blowButton = document.getElementById("blowButton");
let flames = [document.getElementById("flame1"), document.getElementById("flame2"), document.getElementById("flame3")];
let celebrationMusic = document.getElementById("celebrationMusic");
let countdown = document.getElementById("countdown");
let timer = document.getElementById("timer");

const birthdayDate = new Date("January 4, 2024 00:00:00").getTime();

function openCard() {
    card.style.display = 'none';
    countdown.style.display = 'block';
    celebrationMusic.play();
    startCountdown();
}

function startCountdown() {
    let countdownInterval = setInterval(function() {
        let now = new Date().getTime();
        let distance = birthdayDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdown.style.display = 'none';
            cake.style.display = 'block';
        }
    }, 1000);
}

function blowCandles() {
    flames.forEach(flame => {
        flame.style.opacity = 0;
    });
    setTimeout(showCelebrationEffect, 500);
}

function showCelebrationEffect() {
    cake.style.animation = 'sparkleEffect 1s infinite';
    setTimeout(displayMessage, 2000);
}

function displayMessage() {
    birthdayMessage.innerText = `Happy Birthday, Suhani!`;
    message.style.display = 'none';
    setTimeout(showFinalMessage, 1000);
}

function showFinalMessage() {
    finalMessage.style.display = 'block';
    finalMessage.style.animation = 'confettiAnimation 2s infinite';
}
