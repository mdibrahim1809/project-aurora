 import { CONFIG } from "./config.js";
 import SceneManager from "./sceneManager.js";
 import { WelcomeScene } from "../scenes/welcome.js";
 import { initButtons } from "../components/buttonEvents.js";
 import { createSnow } from "../animations/snow.js";
 import { initScrollAnimations } from "../animations/scroll.js";
 /*=========================================
        CREATE STARS
    =========================================*/
 function createStars() {

    const container = document.querySelector(".stars");

    if (!container) return;

    container.innerHTML = "";
    
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
// async function init() {

//     try {

//         const app = document.getElementById("app");

//         if (!app) {
//             console.error("Aurora: #app container not found.");
//             return;
//         }

//         const manager = new SceneManager(app);

//         manager.render(WelcomeScene);

//         createStars();
//         createSnow();

//         initButtons();

//     } catch (error) {

//         console.error("Aurora failed to initialize.", error);

//     }

// }
async function init() {

    try {

        console.log("Aurora: Starting...");

        const app = document.getElementById("app");

        const manager = new SceneManager(app);

        await manager.render(WelcomeScene);
        createStars();
        createSnow();
        initButtons();

        console.log("Aurora: Ready ✅");

    } catch (error) {

        console.error("Aurora failed to initialize.", error);

    }

}

document.addEventListener("DOMContentLoaded", init);