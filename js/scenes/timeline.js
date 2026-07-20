/*=========================================
    TIMELINE SCENE
=========================================*/

import { loadJSON } from "../core/dataLoader.js";
import { TimelineCard } from "../components/timelineCard.js";

export async function TimelineScene() {

    // 👇 ADD THIS
    console.log("TimelineScene called");

    const timeline = await loadJSON("./data/timeline.json");

    // 👇 ADD THIS
    console.log("Timeline Data:", timeline);

    return `

    <section class="timeline-page">

        <div class="timeline-header">

            <h1>Our Journey</h1>

            <p>
                Every memory has a beginning.
            </p>

        </div>

        <div class="timeline">

            <div class="timeline-line"></div>

            ${timeline.map((item, index) => TimelineCard(item, index)).join("")}   
        </div>

    </section>

    `;

}