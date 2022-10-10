// DOM references

// * Inputs
const billAmountInput = document.querySelector('.bill-amount-input');
const numberOfPeopleInput = document.querySelector('.number-of-people-input');
const customPercentageInput = document.querySelector('.custom-percentage-input');

// * Result elements
const tipPerPersonResultEl = document.querySelector('.tip-per-person-result');
const tipTotalResultEl = document.querySelector('.tip-total-result');

function getCheckedTipPercentage() {
    if (customPercentageInput.value === "" || customPercentageInput.value === undefined || customPercentageInput.value === null) {
        return document.querySelector('.tip-percentage-input:checked').dataset['percentage'];
    } else {
        return Number((customPercentageInput.value) / 100);
    }
}

billAmountInput.addEventListener('keydown', renderResult);
numberOfPeopleInput.addEventListener('keydown', renderResult);
customPercentageInput.addEventListener('keydown', renderResult);
customPercentageInput.addEventListener('keydown', resetPercentageLabelsColor);

document.querySelectorAll('.tip-percentage-input').forEach((e) => {
    e.addEventListener('change', () => {
        customPercentageInput.value = "";
        renderResult();
    });
})

const percentageLabels = document.querySelectorAll('.tip-percentage-label');

percentageLabels.forEach((label) => {
    label.addEventListener('click', (e) => {
        resetPercentageLabelsColor();
        e.target.style.backgroundColor = "var(--clr-strong-cyan)"
    });
})

function resetPercentageLabelsColor() {
    percentageLabels.forEach((label) => {
        label.style.backgroundColor = "var(--clr-very-dark-cyan)"
    })
}

function renderResult() {

    const billAmount = Number(billAmountInput.value);
    const tipPercentage = Number(getCheckedTipPercentage());
    const numberOfPeople = Number(numberOfPeopleInput.value);

    const tipPerPerson = Number(((billAmount * tipPercentage) / numberOfPeople).toFixed(2));
    const tipTotal = Number(((billAmount / numberOfPeople) + tipPerPerson).toFixed(2));

    if (tipPerPerson === NaN || tipPerPerson === Infinity || tipTotal === NaN || tipTotal === Infinity) {
        tipPerPersonResultEl.textContent = `...`;
        tipTotalResultEl.textContent = `...`;
    } else {
        tipPerPersonResultEl.textContent = tipPerPerson;
        tipTotalResultEl.textContent = tipTotal;
    }

}