import { fetchRequests } from "./dataAccess.js"
import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


const mainContainer = document.querySelector("#container")

fetchRequests()
    .then(
        () => {
            const applicationHTML = `
                <h1>Maude and Merle's Sink Repair</h1>
                <section class="serviceForm">
                    ${ServiceForm()}
                </section>

                <section class="serviceRequests">
                    <h2>Service Requests</h2>
                    ${Requests()}
                </section>
            `

            mainContainer.innerHTML = applicationHTML
        }
    )

