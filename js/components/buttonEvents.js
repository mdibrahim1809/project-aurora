export function initButtons(){

    const btn = document.getElementById("beginBtn");

    if(!btn) return;

    btn.addEventListener("click", () => {

        console.log("Journey Started");

    });

}