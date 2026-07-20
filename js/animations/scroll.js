/*==================================================
    PROJECT AURORA
    SCROLL ANIMATIONS
==================================================*/

export function initScrollAnimations(){

    initReveal();

    initTimelineProgress();

    initActiveMemory();

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

/*=========================================
    ACTIVE MEMORY
=========================================*/

function initActiveMemory(){

    const items=document.querySelectorAll(".timeline-item");

    if(!items.length) return;

    function update(){

        const center=window.innerHeight/2;

        let active=null;

        let distance=Infinity;

        items.forEach(item=>{

            const rect=item.getBoundingClientRect();

            const itemCenter=rect.top+rect.height/2;

            const d=Math.abs(center-itemCenter);

            if(d<distance){

                distance=d;

                active=item;

            }

        });

        items.forEach(item=>{

            item.classList.remove("active");

        });

        if(active){

            active.classList.add("active");

        }

    }

    update();

    window.addEventListener("scroll",update,{passive:true});

}