/*=========================================
    SCENE MANAGER
=========================================*/

export default class SceneManager {

    constructor(root){

        this.root = root;

    }

    async render(scene){

        const html = await scene();

        this.root.innerHTML = html;

    }

}