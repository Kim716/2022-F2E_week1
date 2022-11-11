"use strict";
// gsap.registerPlugin(ScrollTrigger, TextPlugin);

const bars = document.querySelector(".fa-bars");
const bar2 = document.querySelector(".bar-2");

bars.addEventListener("click", (e) => {
  bar2.classList.toggle("show");
});
