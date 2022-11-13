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

if (window.innerWidth > 1000) {
  tl1
    .to(".page-1-genie", {
      top: "40%",
    })
    .to(".page-1-genie", {
      left: "15%",
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
gsap.fromTo(
  ".cursor1",
  0,
  {
    visibility: "visible",
  },
  {
    visibility: "hidden",
    repeat: -1,
    yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
    repeatDelay: 0.5, // 下一次repeat的delay時間
  }
);

gsap.fromTo(
  ".cursor2",
  0,
  {
    visibility: "visible",
  },
  {
    visibility: "hidden",
    repeat: -1,
    yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
    repeatDelay: 0.5, // 下一次repeat的delay時間
  }
);

gsap.fromTo(
  ".cursor3",
  0,
  {
    visibility: "visible",
    delay: 1.5,
  },
  {
    visibility: "hidden",
    repeat: -1,
    yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
    repeatDelay: 0.5, // 下一次repeat的delay時間
  }
);

/*
// const tl2 = gsap.timeline();

// tl2
//   .to(".page-2-q1", {
//     text: "羨慕別人的酷酷網頁動畫？",
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".page-2-q1",
//       toggleActions: "play pause resume reset",
//     },
//   })
//   .to(".page-2-q2", {
//     text: "滿足不了同事的許願？",
//     duration: 1.5,
//   })
//   .to(".page-2-q3", {
//     text: "動畫技能樹太雜無從下手？",
//     duration: 1.5,
//   });
*/

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

// Animation p4
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-4-back",
    markers: false,
    start: "top 38%",
    end: "top 5%",
    scrub: true,
  },
});

tl4
  .from(".page-4-genie1", {
    left: "-30%",
  })
  .from(
    ".page-4-genie2",
    {
      left: "130%",
    },
    "<"
  )
  .from(
    ".page-4-title",
    {
      top: "40%",
      height: "27%",
    },
    "<"
  );

// Animation p5

// one test
/*
// const card = document.querySelector(".cardCont");
// gsap.set(".card-1-back", { rotationY: -180 });
// const turnBack = gsap
//   .timeline({ paused: true })
//   .to(".card-1-front", { duration: 1, rotationY: 180 })
//   .to(".card-1-back", { duration: 1, rotationY: 0 }, "<");

// card.addEventListener("mouseenter", function () {
//   console.log(1);
//   turnBack.play();
// });
// card.addEventListener("mouseleave", function () {
//   console.log(2);
//   turnBack.reverse();
// });
*/
gsap.utils.toArray(".cardCont").forEach(function (card) {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 1000,
  });
  const q = gsap.utils.selector(card);
  const front = q(".cardFront");
  const back = q(".cardBack");

  gsap.set(back, { rotationY: -180 });

  const tl = gsap
    .timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0);

  card.addEventListener("mouseenter", function () {
    tl.play();
  });
  card.addEventListener("mouseleave", function () {
    tl.reverse();
  });
});
