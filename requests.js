// Makes Request for currency data and changes values on screen
function makeRequest() {
    const request = new XMLHttpRequest
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            convertToAmount = Math.round(100 * (convertFromAmount * data.conversion_rate)) / 100
            convertToAmountInput.value = convertToAmount
        } else if (e.target.readyState === 4) {
            console.log('Error');
        }
    })
    request.open('GET', `https://v6.exchangerate-api.com/v6/f20ca5a394a4b70c7efbdd65/pair/${startCurrency}/${targetCurrency}`)
    request.send()
}

function makeRequest2() {
    const request = new XMLHttpRequest
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            convertFromAmount = Math.round(100 * (convertToAmount / data.conversion_rate)) / 100
            convertFromAmountInput.value = convertFromAmount
        } else if (e.target.readyState === 4) {
            console.log('Error');
        }
    })
    request.open('GET', `https://v6.exchangerate-api.com/v6/f20ca5a394a4b70c7efbdd65/pair/${startCurrency}/${targetCurrency}`)
    request.send()
}

function makeRequest3() {
    const request = new XMLHttpRequest
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            data.forEach(country => {
                if (country.name === countrySelector.value) {
                    currencyValue.innerHTML = `${country.currencies[0].code} ${country.currencies[0].name}`
                }
            });
        } else if (e.target.readyState === 4) {
            console.log('Error');
        }
    })
    request.open('GET', `https://restcountries.eu/rest/v2/all`)
    request.send()
}

function requestCountries() {
    const request = new XMLHttpRequest
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            let currencyList = []

            data.forEach(country => {
                if (!currencyList.includes(`${country.currencies[0].code} ${country.currencies[0].name}`)) {
                    currencyList.push(`${country.currencies[0].code} ${country.currencies[0].name}`)
                }
            });

            currencyList.splice(28, 1)

            // Generates Start Currency Input List
            currencyList.forEach(currency => {
                let opt = document.createElement('option');
                opt.appendChild(document.createTextNode(currency));
                opt.value = currency;
                startCurrencyInput.appendChild(opt);
            });
            // Generates Target Currency Input List
            currencyList.forEach(currency => {
                let opt = document.createElement('option');
                opt.appendChild(document.createTextNode(currency));
                opt.value = currency;
                targetCurrencyInput.appendChild(opt)
            });
            // Generates Country List
            data.forEach(country => {
                let opt = document.createElement('option');
                opt.appendChild(document.createTextNode(country.name));
                opt.value = country.name;
                countrySelector.appendChild(opt)
            });
        } else if (e.target.readyState === 4) {
            console.log('Error');
        }
    })
    request.open('GET', `https://restcountries.eu/rest/v2/all`)
    request.send()
}