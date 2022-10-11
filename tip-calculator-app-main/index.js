// DOM references

// * Inputs
const billAmountInput = document.querySelector('.bill-amount-input');
const numberOfPeopleInput = document.querySelector('.number-of-people-input');
const customPercentageInput = document.querySelector('.custom-percentage-input');
const resetBtn = document.querySelector('.reset-btn')

// * Result elements
const tipPerPersonResultEl = document.querySelector('.tip-per-person-result');
const tipTotalResultEl = document.querySelector('.tip-total-result');

function getCheckedTipPercentage() {
    if (customPercentageInput.value === "") {
        return document.querySelector('.tip-percentage-input:checked').dataset['percentage'];
    } else {
        return Number((customPercentageInput.value) / 100);
    }
}

document.addEventListener('keydown', renderResult)

// billAmountInput.addEventListener('keydown', renderResult);
// numberOfPeopleInput.addEventListener('keydown', checkIfNumberOfPeopleInvalid);
// customPercentageInput.addEventListener('keydown', renderResult);
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

// function checkIfNumberOfPeopleInvalid() {
//     if (numberOfPeopleInput.value === 0 || numberOfPeopleInput.value === "") {
//         numberOfPeopleInput.style.outline = "1px solid red"
//         console.log('invalid')
//     } else {
//         numberOfPeopleInput.style.outline = "5px solid var(--clr-strong-cyan)"
//     }
// }

function renderResult() {

    document.querySelector('.tip-percentage-input:checked').style.backgroundColor = "var(--clr-strong-cyan) !important"

    const billAmount = Number(billAmountInput.value);
    const tipPercentage = Number(getCheckedTipPercentage());
    const numberOfPeople = Number(numberOfPeopleInput.value);

    if (billAmount === 0) {
        billAmountInput.dataset.invalid = true;
    } else {
        billAmountInput.dataset.invalid = false;
    }

    const tipPerPerson = Number(((billAmount * tipPercentage) / numberOfPeople).toFixed(2));
    const tipTotal = Number(((billAmount / numberOfPeople) + tipPerPerson).toFixed(2));

    if (
        billAmount === 0 || tipPercentage === 0 || numberOfPeople === 0
        ) {
        tipPerPersonResultEl.textContent = `...`;
        tipTotalResultEl.textContent = `...`;
    } else {
        tipPerPersonResultEl.textContent = `$${tipPerPerson}`;
        tipTotalResultEl.textContent = `$${tipTotal}`;
    }
}

resetBtn.addEventListener('click', () => {
    billAmountInput.value = 0;
    numberOfPeopleInput.value = 0;
    renderResult();
})