const emailInput = document.querySelector('#email-input');
const emailForm = document.querySelector('#email-form');

function validateEmail() {
    const validEmailRegex = /@.*\.[A-Za-z]/;
    return emailInput.value.match(validEmailRegex)
}

emailInput.addEventListener('keyup', () => {
    if (validateEmail()) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }
})

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateEmail()) {
        alert ('Accepted');
    } else {
        alert('Rejected')
    }
})
