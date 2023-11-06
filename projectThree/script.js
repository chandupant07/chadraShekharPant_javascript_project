// const url = "https://api.ipgeolocation.io/ipgeo?apiKey=63ae995ac74e4de69da508d5fc712c38"


async function getLocation() {

  document.querySelector('#showmap').style = "display:block"
  document.querySelector('#apiDataTable').style = "display:block"

  try {
    const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=63ae995ac74e4de69da508d5fc712c38")

    if (!response.ok) {
      throw new Error(`Error!status:${(response).status}`)
    }

    const getLocationData = await response.json()
    console.log(getLocationData)

    // return getLocationData
  }
  catch (err) {
    console.log(err)
  }
}

async function displayData() {

  const munna = await getLocation()
  console.log(munna.ip)

  // const geoLocationTableBoby = document.getElementById("geoLocation-table-body")
  // for (let geoAPIData of munna) {

  //   const row = document.createElement('tr')

  //   const geoCell = document.createElement('td')
  //   geoCell.textContent = geoAPIData.ip
  //   row.appendChild(geoCell)

  //   geoLocationTableBoby.appendChild(row)
  // }
}
displayData()