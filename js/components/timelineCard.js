/*=========================================
    TIMELINE CARD V2
=========================================*/

export function TimelineCard(memory, index){

    const side = index % 2 === 0 ? "left" : "right";

    return `

    <article class="timeline-item ${side} ${memory.status}">

        <div class="timeline-left">

            ${
                side === "left"
                ? `
                <div class="timeline-content">

                    <span class="timeline-date">${memory.date}</span>

                    <h2>${memory.title}</h2>

                    <small>${memory.place}</small>

                    <p>${memory.quote}</p>

                </div>
                `
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
                ? `
                <div class="timeline-content">

                    <span class="timeline-date">${memory.date}</span>

                    <h2>${memory.title}</h2>

                    <small>${memory.place}</small>

                    <p>${memory.quote}</p>

                </div>
                `
                : ""
            }

        </div>

    </article>

    `;

}