"use strict";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const bars = document.querySelector(".fa-bars");
const bar2 = document.querySelector(".bar-2");
const page6Btn1 = document.querySelector(".page-6-btn1");
const page6Btn2 = document.querySelector(".page-6-btn2");
const page6Img1 = document.querySelector(".page-6-img1");
const page6Img2 = document.querySelector(".page-6-img2");

// 導航列漢堡
bars.addEventListener("click", (e) => {
  bar2.classList.toggle("show");
});

// 活動說明切換
page6Btn1.addEventListener("click", (e) => {
  page6Img1.classList.remove("close");
  page6Img2.classList.add("close");
  e.target.classList.remove("yellow-background");
  page6Btn2.classList.add("yellow-background");
});

page6Btn2.addEventListener("click", (e) => {
  page6Img2.classList.remove("close");
  page6Img1.classList.add("close");
  e.target.classList.remove("yellow-background");
  page6Btn1.classList.add("yellow-background");
});

// Animation p1
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-1-genie",
    markers: false,
    start: "top 38%",
    end: "top 10%",
    scrub: true,
  },
});

if (window.screen.width < 1000) {
  tl1
    .to(".page-1-genie", {
      top: "40%",
    })
    .to(".page-1-genie", {
      left: "20%",
    });
} else {
  tl1
    .to(".page-1-genie", {
      top: "40%",
    })
    .to(".page-1-genie", {
      left: "25%",
    });
}

// Animation p2
gsap.to(".page-2-q1", {
  text: "羨慕別人的酷酷網頁動畫？",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".page-2-q1",
    toggleActions: "play pause resume reset",
  },
});

gsap.to(".page-2-q2", {
  text: "滿足不了同事的許願？",
  duration: 1.5,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".page-2-q2",
    toggleActions: "play pause resume reset",
  },
});

gsap.to(".page-2-q3", {
  text: "動畫技能樹太雜無從下手？",
  duration: 1.5,
  delay: 3,
  scrollTrigger: {
    trigger: ".page-2-q3",
    toggleActions: "play pause resume reset",
  },
});
