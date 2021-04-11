import { completeRequest, deleteRequest, getPlumbers, getRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            const completion = {
                plumberId: parseInt(plumberId),
                requestId: parseInt(requestId),
                date_created: Date.now()
            }

            completeRequest(completion)
        }
    }
)

export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()

    let html = `
        <div class="requests">
            <div class="row--header">
                <div class="request__description--header">Description</div>
                <div class="request__completion--header">Completed By</div>
                <div class="request__delete--header"></div>
            </div>

            ${
                requests.map(
                    (request) => {
                        return `
                        <div class="${request.completed ? "request--completed" : ""} request">
                            <div class="request__description">${request.description}</div>
                            <div class="request__completion">
                                ${
                                    request.completed
                                        ? ""
                                        : `<select class="plumbers" id="plumbers">
                                                <option value="">Choose</option>
                                                ${
                                                    plumbers.map(
                                                        plumber => {
                                                            return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                                                        }
                                                    ).join("")
                                                }
                                            </select>`
                                }
                            </div>
                            <div class="request__delete">
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
