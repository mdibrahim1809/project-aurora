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

            <div class="timeline-line">
                <div class="timeline-progress"></div>
            </div>

            ${timeline.map((item, index) => TimelineCard(item, index)).join("")}
            
            <article class="timeline-item timeline-forever">

                <div class="timeline-left"></div>

                <div class="timeline-center">

                    <div class="timeline-dot timeline-infinity">

                        ∞

                    </div>

                </div>

                <div class="timeline-right"></div>

            </article>
            

        </div>

    </section>

    `;

}
// <div class="timeline-ending">

            //     <div class="timeline-ending-dot"></div>

            //     <span class="timeline-ending-date">

            //         25 Aug 2025

            //     </span>

            //     <span class="timeline-ending-arrow">

            //         →

            //     </span>

            //     <span class="timeline-ending-infinity">

            //         ∞

            //     </span>

            // </div>