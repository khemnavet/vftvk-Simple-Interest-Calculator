window.onload = function() {
    // attach event handlers after the DOM has loaded

    //rate slider input, on change value do the following
    // - update the rate value displayed to the rate selected
    const rateElement = document.getElementById('rate');
    rateElement.addEventListener('change', (event) => {
        const rateDisplay = document.getElementById('rate_val');
        rateDisplay.textContent = `${event.target.value}%`;
    });
}

function isPositiveNumber (value) {
    if (isNaN(parseFloat(value))) {
        return false;
    }
    if (parseFloat(value) <= 0) {
        return false;
    }
    return true;
}

function isInRange(value, minValue, maxValue) {
    return (value >= minValue) && (value <= maxValue);
}

function isValidInput() {
    //principal input, ensure value entered is positive number
    const principalElement = document.getElementById('principal');
    if (!isPositiveNumber(principalElement.value)) {
        principalElement.focus();
        alert('Enter a positive number');
        return false;
    }

    //validate rate
    const rateElement = document.getElementById('rate');
    if (!isPositiveNumber(rateElement.value || !isInRange(rateElement.value, rateElement.minValue, rateElement.maxValue))) {
        rateElement.focus();
        alert('The rate selected is invalid');
        return false;
    }

    //validate years
    const yearsElement = document.getElementById('years');
    if (!isPositiveNumber(yearsElement.value)) {
        yearsElement.focus();
        alert('The years selected is invalid');
        return false;
    }

    return true;
}

function compute()
{
    if (isValidInput()) {
        //get input
        const principal = document.getElementById('principal').value;
        const rate = document.getElementById('rate').value;
        const years = document.getElementById('years').value;

        //calculate simple interest
        const interest = (principal * rate * years) / 100;
        const year = new Date().getFullYear() + parseInt(years);

        //display results of calculation
        results = `If you deposit <span class="highlight">${principal}</span>,<br/>at an interest rate of <span class="highlight">${rate}%</span>.<br/>You will receive an amount of <span class="highlight">${interest}</span>,<br/>in the year <span class="highlight">${year}</span>.`;
        document.getElementById('result').innerHTML = results;
    }
}
        