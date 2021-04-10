import { deleteRequest, getRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <div class="requests">
            ${
                requests.map(
                    (request, idx) => {
                        return `
                        <div class="request ${idx % 2 !== 1 ? "row--gray" : ""}">
                            <div class="cell--requests request__description">${request.description}</div>
                            <div class="cell--requests request__actions">
                                <button class="button request__delete" id="request--${request.id}">Delete</button>
                            </div>
                        </div>
                        `
                    }
                ).join("")
            }
        </div>
    `

    return html
}

