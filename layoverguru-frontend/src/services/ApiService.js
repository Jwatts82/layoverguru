class ApiService {
    constructor(){
        this.baseURL = 'http://localhost:3000'
    }

    async fetchAirports(){
        let res = await fetch(this.baseURL + '/airports')
        let data = await res.json()
        return data
    }

    // getAirports() {
    //     main.innerHTML = ""
    //     // fetch(BASE_URL + '/airports')
    //     // .then(res => res.json())
    //     fetchAirports()
    //     .then( airports => { 
    //         airports.map(airport => {
    //         main.innerHTML += `
    //         <li>
    //             <a href="#" data-id="${airport.id}">${airport.name}</a>
    //             - ${airport.visited ? "Visited" : "Not Visited"}
    //         </li>
    //         `
    //         })
    //     attachClicksToLinks()
    //     })
    // }
}