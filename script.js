// ---------------- Currency Exchange Tool---------------------

// The currencies currently selected
let startCurrency = 'USD'
let targetCurrency = 'EUR'

// The imputs that select the currencies
let startCurrencyInput = document.getElementById("convertFromInput")
let targetCurrencyInput = document.getElementById('convertToInput')

// Listens for changes in the currency selection
startCurrencyInput.addEventListener('input', (e) => {
    startCurrency = e.target.value
    makeRequest2()
})
// Listens for changes in the currency selection
targetCurrencyInput.addEventListener('input', (e) => {
    targetCurrency = e.target.value
    makeRequest()    
})

// The amount of money entered into the input box
let convertFromAmount
let convertToAmount

// The input box used to enter money amounts
let convertFromAmountInput = document.getElementById('convertFromAmountInput')
let convertToAmountInput = document.getElementById('convertToAmountInput')

// Executes whenever any input is detected in the first text box
convertFromAmountInput.addEventListener('input', (e) => {
    convertFromAmount = e.target.value
    makeRequest()
})

// Executes whenever input is detected in the second text box
convertToAmountInput.addEventListener('input', (e) => {
    convertToAmount = e.target.value
    makeRequest2()
})





// ----------- Know the Currency You Need? ---------------

// Country selector
let countrySelector = document.getElementById('countrySelector')

// Currency selector
let currencyValue = document.getElementById('currencyValue')

countrySelector.addEventListener('input', (e) => {
    makeRequest3()
})


requestCountries()