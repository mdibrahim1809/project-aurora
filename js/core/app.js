import { CONFIG } from "./config.js";
import SceneManager from "./sceneManager.js";

import { WelcomeScene } from "../scenes/welcome.js";
import { initButtons } from "../components/buttonEvents.js";
import { createSnow } from "../animations/snow.js";

const app = document.getElementById("app");

const manager = new SceneManager(app);

manager.render(WelcomeScene);

// Create effects
createStars();
createSnow();

// Button events
initButtons();

/*=========================================
    CREATE STARS
=========================================*/

function createStars() {

    const container = document.querySelector(".stars");

    if (!container) return;

    for (let i = 0; i < CONFIG.animation.stars; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.opacity = Math.random() * 0.8 + 0.2;

        star.style.animationDuration =
            (2 + Math.random() * 5) + "s";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(star);

    }

}