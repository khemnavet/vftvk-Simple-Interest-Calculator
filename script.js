window.onload = function() {
    // attach event handlers after the DOM has loaded

    //rate slider input, on change value do the following
    // - update the rate value displayed to the rate selected
    // - recompute the interest
    const rateElement = document.getElementById('rate');
    rateElement.addEventListener('change', (event) => {
        const rateDisplay = document.getElementById('rate_val');
        rateDisplay.textContent = `${event.target.value}%`;
    });
}

function isValidInput() {
    //principal input, ensure value entered is positive number
    const principalElement = document.getElementById('principal');
    if (isNaN(parseFloat(principalElement.value))) {
        principalElement.focus();
        alert('Enter a positive number');
        return false;
    }
    else if (parseFloat(principalElement.value) <= 0) {
        principalElement.focus();
        alert('Enter a positive number');
        return false;
    }

    return true;
}

function compute()
{
    if (isValidInput()) {
        p = document.getElementById("principal").value;
    }
}
        