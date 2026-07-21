/*=========================================
    SCENE MANAGER
=========================================*/

import { initScrollAnimations } from "../animations/scroll.js";
import { initTimelineFocus } from "../components/timelineFocus.js";

export default class SceneManager {

    constructor(root){

        this.root = root;

    }

    async render(scene){

        const html = await scene();

        this.root.innerHTML = html;

        // Initialize scroll-based animations
        initScrollAnimations();
        initTimelineFocus();

    }

}