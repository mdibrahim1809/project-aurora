/*=========================================
    PROJECT AURORA
    BUTTON EVENTS
=========================================*/

import { initScrollAnimations } from "../animations/scroll.js";
import { loadStory } from "../core/storyLoader.js";
import { IntroScene } from "../scenes/intro.js";
import { ChapterOne } from "../scenes/chapter1.js";
import { TimelineScene } from "../scenes/timeline.js";
import { typeWriter } from "../utils/typewriter.js";

/*=========================================
    INIT BUTTONS
=========================================*/

// export function initButtons() {

//     const beginBtn = document.getElementById("beginBtn");

//     if (!beginBtn) return;

//     beginBtn.addEventListener("click", startJourney);

// }
export function initButtons() {

    console.log("initButtons() called");

    const beginBtn = document.getElementById("beginBtn");

    console.log("Button:", beginBtn);

    if (!beginBtn) {

        console.error("beginBtn NOT FOUND");

        return;

    }

    beginBtn.addEventListener("click", () => {

        console.log("BUTTON CLICKED");

        startJourney();

    });

}

/*=========================================
    START JOURNEY
=========================================*/

function startJourney() {

    document.body.style.transition = "opacity .8s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        const app = document.getElementById("app");

        app.innerHTML = IntroScene();

        document.body.style.opacity = "1";

        initIntro();

    }, 800);

}

/*=========================================
    INTRO
=========================================*/

async function initIntro() {

    const story = await loadStory();

    const text = document.getElementById("typewriter");

    const continueBtn = document.getElementById("continueBtn");

    typeWriter(

        text,

        story.intro.text,

        40,

        () => {

            continueBtn.classList.add("show");

        }

    );

    continueBtn.addEventListener("click", openChapterOne);

}

/*=========================================
    CHAPTER ONE
=========================================*/

function openChapterOne() {

    const app = document.getElementById("app");

    document.body.style.opacity = "0";

    setTimeout(() => {

        app.innerHTML = ChapterOne();

        document.body.style.opacity = "1";

        initChapterOne();

    }, 800);

}

/*=========================================
    CHAPTER ONE EVENTS
=========================================*/

function initChapterOne() {

    const nextBtn = document.getElementById("chapterNext");

    console.log("Next Button:", nextBtn);

    if (!nextBtn) return;

    nextBtn.addEventListener("click", () => {

        console.log("Continue button clicked");

        openstory();

    });

}

/*=========================================
    OPEN story
=========================================*/

async function openstory() {

    // 👇 ADD THIS
    console.log("Open story clicked");

    const app = document.getElementById("app");

    document.body.style.opacity = "0";

    setTimeout(async () => {

        // 👇 ADD THIS
        console.log("Rendering story...");

        app.innerHTML = await TimelineScene();

        document.body.style.opacity = "1";

        // Wait until the new DOM is painted
        requestAnimationFrame(() => {

            initScrollAnimations();

        });

    },700);

}