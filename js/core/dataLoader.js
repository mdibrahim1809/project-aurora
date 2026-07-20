/*=========================================
    DATA LOADER
=========================================*/

export async function loadJSON(path){

    try{

        const response = await fetch(path);

        if(!response.ok){

            throw new Error(`Failed to load ${path}`);

        }

        return await response.json();

    }catch(error){

        console.error(error);

        return [];

    }

}