/*==================================================
    PROJECT AURORA
    SCROLL ANIMATIONS
==================================================*/

export function initScrollAnimations(){

    initReveal();

    initTimelineProgress();

}

/*=========================================
    REVEAL
=========================================*/

function initReveal(){

    const items=document.querySelectorAll(".timeline-item.reveal");

    if(!items.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.15,

        rootMargin:"0px 0px -100px 0px"

    });

    items.forEach(item=>observer.observe(item));

}

/*=========================================
    TIMELINE PROGRESS
=========================================*/

function initTimelineProgress(){

    const timeline=document.querySelector(".timeline");

    const progress=document.querySelector(".timeline-progress");

    if(!timeline || !progress) return;

    function update(){

        const rect=timeline.getBoundingClientRect();

        const viewport=window.innerHeight;

        const total=timeline.offsetHeight;

        let value=(viewport*0.5-rect.top)/total;

        value=Math.max(0,Math.min(1,value));

        progress.style.height=(value*100)+"%";

    }

    update();

    window.addEventListener("scroll",update,{passive:true});

}