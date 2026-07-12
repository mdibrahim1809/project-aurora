/*=========================================
    PROJECT AURORA
=========================================*/

import { CONFIG } from "./config.js";
import { Storage } from "./storage.js";
import { navigate } from "./router.js";
import SceneManager from "./sceneManager.js";
import { WelcomeScene } from "../scenes/welcome.js";
import { initButtons } from "../components/buttonEvents.js";
import { createSnow } from "../animations/snow.js";

const app = document.getElementById("app");

const manager = new SceneManager(app);

manager.render(WelcomeScene);

createStars();

createSnow();

initButtons();

console.log(CONFIG);

/*=========================================
    CREATE STARS
=========================================*/

function createStars(){

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.opacity = Math.random();

    star.style.filter = "blur(.3px)";

}