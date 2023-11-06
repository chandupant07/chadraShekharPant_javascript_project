// var url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

async function getCurrencyData() {

  try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const currencyData = await response.json()
    return currencyData
  }
  catch (err) {
    console.log(err)
  }
}


async function displayCurrencData() {
  const currency = await getCurrencyData()
  console.log(currency)

  const currencyTableBody = document.getElementById("currency-table-body")
  for (let curency of currency) {
    const row = document.createElement('tr')

    const flgCell = document.createElement('td')
    const flgImg = document.createElement('img')
    flgImg.src = curency.image
    flgCell.appendChild(flgImg)
    row.appendChild(flgCell)
    flgImg.style = "width:50px"

    const nameCell = document.createElement('td')
    nameCell.textContent = curency.name
    row.appendChild(nameCell)

    const a = document.createElement('td')
    a.textContent = curency.symbol
    row.appendChild(a)

    const currentPrice = document.createElement('td')
    currentPrice.textContent = curency.current_price
    row.appendChild(currentPrice)

    const mrkCap = document.createElement('td')
    mrkCap.textContent = curency.market_cap_change_24h
    row.appendChild(mrkCap)


    const priceChange = document.createElement('td')
    priceChange.textContent = curency.price_change_24h
    row.appendChild(priceChange)


    currencyTableBody.appendChild(row)
  }
}

displayCurrencData()
