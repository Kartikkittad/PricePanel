document.addEventListener('DOMContentLoaded', function () {
    const toggleMonthly = document.getElementById('toggle-monthly');
    const toggleYearly = document.getElementById('toggle-yearly');
    const monthlyPrices = document.querySelectorAll('.price.monthly span');
    const yearlyPrices = document.querySelectorAll('.price.yearly span');
    const currencySelect = document.getElementById('currency-select');

    function updatePrices(currency) {
        const symbols = {
            'USD': '$',
            'EUR': '€',
            'INR': '₹'
        };

        const prices = {
            'USD': [10, 20, 30],
            'EUR': [9, 18, 27],
            'INR': [750, 1500, 2250]
        };

        monthlyPrices.forEach((price, index) => {
            price.textContent = symbols[currency] + (currency === 'INR' ? prices[currency][index] : prices[currency][index]);
        });

        yearlyPrices.forEach((price, index) => {
            price.textContent = symbols[currency] + (currency === 'INR' ? prices[currency][index] * 12 : prices[currency][index] * 12);
        });
    }

    updatePrices(currencySelect.value);

    toggleYearly.addEventListener('click', function () {
        toggleMonthly.style.display = 'inline-block';
        toggleYearly.style.display = 'none';
        document.querySelectorAll('.price.monthly').forEach(price => price.style.display = 'none');
        document.querySelectorAll('.price.yearly').forEach(price => price.style.display = 'block');
    });

    toggleMonthly.addEventListener('click', function () {
        toggleMonthly.style.display = 'none';
        toggleYearly.style.display = 'inline-block';
        document.querySelectorAll('.price.monthly').forEach(price => price.style.display = 'block');
        document.querySelectorAll('.price.yearly').forEach(price => price.style.display = 'none');
    });



    currencySelect.addEventListener('change', function () {
        updatePrices(currencySelect.value);
    });
});
