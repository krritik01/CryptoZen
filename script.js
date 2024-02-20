const cursor = document.querySelector("#cursor")
const cursorblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    // console.log("Hello")
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";

    cursorblur.style.left = dets.x - 150 + "px";
    cursorblur.style.top = dets.y - 150 + "px";
})

const navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function(e){
    // console.log(e)
    e.addEventListener("mouseenter", function(){
        cursor.style.scale=3
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"
    })
    e.addEventListener("mouseleave", function(){
        cursor.style.scale=1
        cursor.style.border="0px solid #95C11E"
        cursor.style.backgroundColor="#95C11E"

    })
})




gsap.to("#nav", {
    backgroundColor: "#4c3c3c",
    height: "70px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -35%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        marker:true,
        start:"top 50%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        marker:true,
        start:"top 50%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // marker:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})

