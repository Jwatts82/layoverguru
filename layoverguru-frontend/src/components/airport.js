class Airport {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.code = data.code
        this.visited = data.visited
        this.activities = data.activities
    }

    render() {
        return `
        <li>
            <a href="#" data-id="${this.id}">${this.name}</a>
            - ${this.visited ? "Visited" : "Not Visited"}
        </li>
        `
    }
}