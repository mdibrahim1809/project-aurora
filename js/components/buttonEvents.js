/*=========================================
    PROJECT AURORA
    BUTTON EVENTS
=========================================*/

import { loadStory } from "../core/storyLoader.js";
import { IntroScene } from "../scenes/intro.js";
import { ChapterOne } from "../scenes/chapter1.js";
import { typeWriter } from "../utils/typewriter.js";
import { TimelineScene } from "../scenes/timeline.js";



export function initButtons() {

    const beginBtn = document.getElementById("beginBtn");

    if (!beginBtn) return;

    beginBtn.addEventListener("click", startJourney);

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

    if (!nextBtn) return;

    nextBtn.addEventListener("click", () => {

        const app = document.getElementById("app");

        document.body.style.opacity="0";

        setTimeout(()=>{

            app.innerHTML=TimelineScene();

            document.body.style.opacity="1";

        },700);
    });

}