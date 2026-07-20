/*=========================================
    TIMELINE CARD
=========================================*/

export function TimelineCard(memory, index) {

    const side = index % 2 === 0 ? "left" : "right";

    return `

    <article class="timeline-item reveal ${side} ${memory.status || ""}">

        <div class="timeline-left">

            ${
                side === "left"
                ? CardContent(memory)
                : ""
            }

        </div>

        <div class="timeline-center">

            <div class="timeline-dot">

                ${memory.icon}

            </div>

        </div>

        <div class="timeline-right">

            ${
                side === "right"
                ? CardContent(memory)
                : ""
            }

        </div>

    </article>

    `;

}

function CardContent(memory){

    return `

        <div class="timeline-content">

            <span class="timeline-date">

                ${memory.date}

            </span>

            <h2>

                ${memory.title}

            </h2>

            <small>

                ${memory.place}

            </small>

            <div class="timeline-image">

                <img
                    src="${memory.image}"
                    alt="${memory.title}"
                    loading="lazy"
                >

            </div>

            <blockquote class="timeline-quote">

                "${memory.quote}"

            </blockquote>

            <div class="timeline-story">

                ${memory.story}

            </div>

        </div>

    `;

}