export function createSnow(){

    const hero = document.querySelector(".hero");

    if(!hero) return;

    for(let i = 0; i < 50; i++){

        const snow = document.createElement("span");

        snow.className = "snow";

        snow.style.left = Math.random() * 100 + "%";

        snow.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        snow.style.animationDelay =
            Math.random() * 5 + "s";

        hero.appendChild(snow);

    }

}