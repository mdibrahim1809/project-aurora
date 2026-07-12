/*=========================================
    STORY LOADER
=========================================*/

export async function loadStory(){

    const response = await fetch("./data/story.json");

    if(!response.ok){

        throw new Error("Failed to load story.json");

    }

    return await response.json();

}