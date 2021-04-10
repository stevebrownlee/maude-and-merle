import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
        <nav class="nav">
            <img class="nav__logo" src="./images/maude-merle.png" alt="Maude and Merle" />
            <h1 class="nav__title">Maude and Merle's Sink Repair</h1>
        </nav>

        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}