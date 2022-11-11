"use strict";
// gsap.registerPlugin(ScrollTrigger, TextPlugin);

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
