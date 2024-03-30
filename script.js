function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "26vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.4,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 1,
      });
    });
    elem.addEventListener("mousemove", function (e) {
      gsap.to(elem.childNodes[3], {
        x: e.x - elem.getBoundingClientRect().x - 70,
        y: e.y - elem.getBoundingClientRect().y - 150,
      });
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector("#page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function page5VideoAnimation() {
  var section = document.querySelectorAll(".sec-right");
  section.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

locomotiveAnimation();

navAnimation();
page2Animation();
page3VideoAnimation();
page5VideoAnimation();

let rotated = false;
function toggleRotation() {
  var downIcon = document.querySelector("#down");
  rotated = !rotated;
  if (rotated) {
    downIcon.classList.add("rotated");
  } else {
    downIcon.classList.remove("rotated");
  }
}
let rotated2 = false;
function toggleRotation2() {
  var downIcon = document.querySelector("#down1");
  rotated2 = !rotated2;
  if (rotated2) {
    downIcon.classList.add("rotated");
  } else {
    downIcon.classList.remove("rotated");
  }
}

gsap.from("#btm6-part2 h4", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#btm6-part2",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from("#btm6-part3 h4", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#btm6-part3",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from("#btm6-part4 h4", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#btm6-part4",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

loadingAnimation();
