/*=========================================
    SCENE MANAGER
=========================================*/

export default class SceneManager {

    constructor(root){

        this.root = root;

    }

    render(scene){

        this.root.innerHTML = scene();

    }

}