const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded",() => {
    getAirports()
})

function getAirports() {
    let main = document.getElementById('main')
    fetch(BASE_URL + '/airports')
    .then(res => res.json())
    .then(airports => {
        console.log(airports)
    })
}