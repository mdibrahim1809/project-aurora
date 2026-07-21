/*=========================================
    MEMORY FOCUS
=========================================*/

export function initTimelineFocus(){

    const cards = document.querySelectorAll(".timeline-item");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.classList.add("focused");

        });

        card.addEventListener("mouseleave",()=>{

            card.classList.remove("focused");

        });

    });

}