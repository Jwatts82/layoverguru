const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded", () => {
    getAirports()
})

function getAirports() {
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + '/airports')
    .then(res => res.json())
    .then( airports => {airports.map(airport => {
        main.innerHTML += `
        <li>
            <a href="#" data-id="${airport.id}">${airport.name}</a>
            - ${airport.visited ? "Visited" : "Not Visited"}
        </li>
        `
        })
    attachClicksToLinks()
    })}

function attachClicksToLinks() {
    const airports = document.querySelectorAll('li a')
    airports.forEach(airport => {
        airport.addEventListener('click', displayAirport)
    })
}

function displayAirport(e) {
    console.log(e.target)
        let id =  e.target.dataset.id
        let main = document.getElementById('main')
        main.innerHTML = ""
        fetch(BASE_URL + `/airports/${id}`)
        .then(res => res.json())
        .then(airport => {
            main.innerHTML = `
        <h3>${airport.code}</h3>
        <hr>
        <br>
        <p>${airport.visited ? "Visited" : "Not Visited"}</p>
        `
        // airport.activities.forEach
    })
}



//const apiService = new ApiService()
// let main = document.getElementById('main')

// const init = () => {
//     bindEventListeners()
//     renterAirports()
// }

// function bindEventListeners() {
//     document.getElementById('airport-form').addEventListener('click', displayCreateForm )
//     document.getElementById('activities').addEventListener('click', renderActivities)
// }

// // window.addEventListener("DOMContentLoaded",() => {
// //     //document.getElementById('airport-form').addEventListener('click', displayCreateForm)
// //     document.getElementById('airports').addEventListener('click', getAirports)
// //     //getAirports()
// // })

// function displayCreateForm() {
//     let formDiv = document.querySelector("#new-airport-form")
//     let html = `
//         <form>
//                 <label>Name:</label>
//                 <input type="text" id='name'>
//                 <label>Code:</label>
//                 <input type="text" id='code'>
//                 <label>Visited:</label>
//                 <input type="checkbox" id='visited'>
//                 <input type="submit">
//         </form>
//     `
//     formDiv.innerHTML = html
//     document.querySelector('form').addEventListener('submit', createAirport)
// }

// function clearForm(){
//     let formDiv = document.querySelector("#new-airport-form")
//     formDiv.innerHTML = ""
// }

// function createAirport(e){
//     e.preventDefault()
//     let main = document.getElementById('main')
//     let airport = {
//         name: e.target.querySelector("#name").value,
//         code: e.target.querySelector("#code").value,
//         visited: e.target.querySelector("#visited").checked
//     }

//     let data = await apiService.fetchCreateAirport(airport)
//     let newAirport = new Airport(data)
//     main.innerHTML += newAirport.render()
//     //attachClicksToLinks()
//     clearForm()

//     // let configObj = {
//     //     method: 'POST',
//     //     body: JSON.stringify(airport),
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         'Accept': 'application/json'
//     //     }
//     //}

//     fetch(BASE_URL + '/airports', configObj)
//     .then(res => res.json())
//     .then(airport => {
//         main.innerHTML += `
//         <li>
//             <a href="#" data-id="${airport.id}">${airport.name}</a>
//             - ${airport.code} - ${airport.visited ? "Visited" : "Not Visited"}
//         </li>
//         `
//         attachClicksToLinks()
//         clearForm()
//         }
//     )
// }

// function renderAirports() {
//     const airoprts = await apiService.fetchAirports()
//     main.innerHTML = ""
//     airports.map(airport => {
//         const newCategory = new Airport(airport)
//         main.innerHTML += newAirport.render()
//     })

//     // fetch(BASE_URL + '/airports')
//     // .then(res => res.json())
//     // .then(airports => {
//     //     airports.map(airport => {
//     //     main.innerHTML += `
//     //     <li>
//     //         <a href="#" data-id="${airport.id}">${airport.name}</a>
//     //         - ${airport.code} - ${airport.visited ? "Visited" : "Not Visited"}
//     //     </li>
//     //     `
//     //     })
//     // attachClicksToLinks()
//     // })
// }
