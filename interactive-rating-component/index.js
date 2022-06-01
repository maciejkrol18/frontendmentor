const rating1 = document.querySelector('.rating-btn-1');
const rating2 = document.querySelector('.rating-btn-2');
const rating3 = document.querySelector('.rating-btn-3');
const rating4 = document.querySelector('.rating-btn-4');
const rating5 = document.querySelector('.rating-btn-5');
const submitBtn = document.querySelector('.submit-btn');
const firstCard = document.querySelector('.first-card');
const secondCard = document.querySelector('.second-card');
const ratingDisplay = document.querySelector('.rating-display');

let rating = 0;

rating1.addEventListener("click", function() {
    rating = 1;
});

rating2.addEventListener("click", function() {
    rating = 2;
});

rating3.addEventListener("click", function() {
    rating = 3;
});

rating4.addEventListener("click", function() {
    rating = 4;
});

rating5.addEventListener("click", function() {
    rating = 5;
});

submitBtn.addEventListener("click", function() {
    if (rating === 0) {
        alert("Please submit your rating before continuing!");
    } else {
        firstCard.classList.add('hidden');
        secondCard.classList.remove('hidden');
        document.querySelector('.second-card-heading').classList.add('animate__animated', 'animate__pulse')
        ratingDisplay.textContent=`You selected ${rating} out of 5`;
    }
});
