const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded",() => {
    getAirports()
})

function getAirports() {
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + '/airports')
    .then(res => res.json())
    .then(airports => {
        airports.map(airport => {
        main.innerHTML += `
        <li>
            <a href="#" data-id="${airport.id}">${airport.name}</a>
            - ${airport.code} - ${airport.visited ? "Visited" : "Not Visited"}
        </li>
        `
        })
    attachClicksToLinks()
    })
}

function attachClicksToLinks() {
    let airports = document.querySelectorAll('Li a')
    airports.forEach(airport => {
        airport.addEventListener('click', displayAirport)
    })

}

function displayAirport(e) {
    console.log(e.target)
    let id =  e.target.dataset.id
    main.innerHTML = ""
    fetch(BASE_URL + `/airports/${id}`)
    .then(res => res.json())
    .then(airport => {
        main.innerHTML = `
        <h1>${airport.code}</h1>
        <hr>
        <br>
        <p>${airport.visited ? "Visited" : "Not Visited"}</p>
        `
        // airport.activities.forEach
    })
}