const cambio = {
    dolar: 4.85,
    euro: 5.36,
    bitcoin: 202882
}

const selectConvert = document.getElementById('currency-to-convert')
const valueConvert = document.getElementById('value-to-convert')
const textCurrencyCurrent = document.getElementById('currency-current')
const textNewCurrency = document.getElementById('new-currency')
const newCurrencyImg = document.getElementById('new-currency-img')
const button = document.getElementById('main-button')

const verificaSelect = () => {
    let index = selectConvert.selectedIndex
    let selectedText = selectConvert.options[index].text
    return selectedText 
}

const convertValues = () => {
    let selectedText = verificaSelect()

    if (selectedText === 'US$ Dólar Americano'){
        let result = (valueConvert.value / cambio.dolar).toFixed(2)

        textCurrencyCurrent.innerHTML = new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL'}).format(valueConvert.value)

        textNewCurrency.innerHTML = new Intl.NumberFormat('en-US', 
        {style: 'currency', currency:'USD'}).format(result)
    }

    if (selectedText === '€ Euro'){
        let result = (valueConvert.value / cambio.euro).toFixed(2)

        textCurrencyCurrent.innerHTML = new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL'}).format(valueConvert.value)

        textNewCurrency.innerHTML = new Intl.NumberFormat('pt-PT', 
        {style: 'currency', currency:'EUR'}).format(result)
    }
}


const changeFlag = () => {
    let selectedText = verificaSelect()

    if (selectedText === 'US$ Dólar Americano'){
        newCurrencyImg.src = './assets/eua.png'
    }

    if (selectedText === '€ Euro'){
        newCurrencyImg.src = './assets/euro.png'
    }

    convertValues()

}


button.addEventListener('click', convertValues)
selectConvert.addEventListener('change', changeFlag)