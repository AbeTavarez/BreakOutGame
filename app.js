//* Variables
const showRulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// Adds event listener to the show rules 
showRulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
});

// Adds event listener to the close button
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})