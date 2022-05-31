"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Cool one 😍

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////

//Cookie Message

const header = document.querySelector(".header");
const message = document.createElement("div");

message.classList.add("cookie-message");

message.innerHTML =
  'we use cookies to improve functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

header.prepend(message);

const btnCloseCookie = document.querySelector(".btn--close--cookie");

btnCloseCookie.addEventListener("click", function () {
  message.remove();
});

// styles

message.style.backgroundColor = "#222333";

message.style.width = "104.1%";
message.style.height = parseFloat(getComputedStyle(message).height) + 30 + "px";

document.documentElement.style.setProperty("--color-secondary", "orangered");

///////////////////////////////////////////// What are the Attributes???/////////////////////////////////////////////////////

// const logo = document.querySelector(".nav__logo");

// console.log(logo.className); // historical reason why it's not only class
// console.log(logo.id);
// console.log(logo.src);
// console.log(logo.designer); // doesn't work why?
// logo.alt = "beautiful as ****";
// console.log(logo.alt);

// IMPORTANT ========>>>>>>> logo.setAttribute("company", "my imaginary ink");

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

////////// Classes

// link.classList.add()
// link.classList.remove()
// link.classList.toggle()
// link.classList.contains()

// button scroll

const buttonScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");

const dotsContainer = document.querySelector(".dots");

buttonScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  // const s2coords = section2.getBoundingClientRect();

  // window.scrollTo(
  //   ,

  // );
  ////////////////old way of scrolling!!!
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  ///////////////////newer way of scrolling****

  section1.scrollIntoView({ behavior: "smooth" });
});

// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

const randomInt = (max, min) => Math.floor(Math.random() * (max - min) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

document.querySelector(".nav__logo").addEventListener("click", function () {
  this.style.borderRadius = "20px";
  this.style.backgroundColor = randomColor();
});

//  Old school way

const TabBar = document.querySelectorAll(".nav__link");
const features = document.querySelector("#section--1");
const operations = document.querySelector("#section--2");
const testimonial = document.querySelector("#section--3");

TabBar.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

/////////Modern way of scrolling (more than one element engaged)

// 1. Add event listener to common parent element
// 2. Determine what element orginized the event
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.classList.contains("nav__link")) {
//     e.preventDefault();
//     const id = e.target.getAttribute("href");

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });
// function reasads(str, num) {
//   let funcoutput;
//   for (let i = 0; i < String(num).length; i++) {
//     (funcoutput += str).split("");
//   }
//   return funcoutput;
// }

// console.log(reasads("hi ", 5));

// const repeat = function (text, num) {
//   const rep = `${text + " "}`.repeat(num).split(" ").slice(0, -1);
//   console.log(rep);
//   rep.forEach(function (t) {
//     if (t) console.log(t);
//   });
// };
// repeat("hello", 44);

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// const btn2 = document.querySelector('.operations__tab--2').addEventListener('click', function(){

// })

// const btn3 = document.querySelector('.operations__tab--3').addEventListener('click', function(){

// })

//Old fashion
// tabs.forEach((t) =>
//   t.addEventListener("click", () => console.log("hiiiiiiii"))
// );

// New way of looping over tabs

//Review!
// 1. Add event listener to common parent element
// 2. Determine what element orginized the event
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  console.log(clicked);

  // Gaurd Clause

  if (!clicked) return;

  // manipulating tab area
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // manipulating content area
  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//////////////////                                           Menu fade animation

const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });

    logo.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    // console.log(siblings);
    const logo = link.closest("nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });

    logo.style.opacity = 1;
  }
});

// Scrolling Navigation
// const navApp = section1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
// console.log(window.scrollY);

//   if (window.scrollY + 1 > navApp.top) nav.classList.add("sticky");
//   else {
//     nav.classList.remove("sticky");
//   }
// });

///////////////////////////////////////////// sticky navigation: Intersection Observer API /////////////////////////////////////////////////////

// const obsfunctionBack = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };

// const obsOpt = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsfunctionBack, obsOpt);

// observer.observe(section1);

// e.g:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const head = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  // console.log(entries1);

  const [entry] = entries;

  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else {
    nav.classList.remove("sticky");
  }
};

const obsOpt = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const headerObserver = new IntersectionObserver(stickyNav, obsOpt);

headerObserver.observe(head);

////////////////////////////////////////////

// reveal sections

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  // gaurd clause
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};
const obj = { root: null, threshold: 0.15 };

const sectionObserver = new IntersectionObserver(revealSection, obj);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images

const imageTargets = document.querySelectorAll("img[data-src]");

// console.log(imageTargets);

const loadImg = function (entries, observe) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
};

const imgobserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imageTargets.forEach((img) => imgobserver.observe(img));

// Slider

const slides = document.querySelectorAll(".slide");

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const btnleft = document.querySelector(".slider__btn--left");

const btnright = document.querySelector(".slider__btn--right");
let curr = 0;

const maxCurr = slides.length;

btnright.addEventListener("click", function () {
  if (curr === maxCurr - 1) {
    curr = 0;
  } else curr++;

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curr)}%)`)
  );
});

btnleft.addEventListener("click", function () {
  if (curr === 0) {
    curr = maxCurr - 1;
  } else {
    curr--;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curr)}%)`)
  );
});

// Keyboard handler(part1)

document.addEventListener("keydown", function (e) {
  if (e.key === "q") {
    section1.scrollIntoView({ behavior: "smooth" });
  }

  if (e.key === "w") {
    section2.scrollIntoView({ behavior: "smooth" });
  }

  if (e.key === "e") {
    section3.scrollIntoView({ behavior: "smooth" });
  }
});

// part2
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowLeft") {
    if (curr === 0) {
      curr = maxCurr - 1;
    } else {
      curr--;
    }

    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curr)}%)`)
    );
  }

  if (e.key === "ArrowRight") {
    if (curr === maxCurr - 1) {
      curr = 0;
    } else curr++;

    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curr)}%)`)
    );
  }
});

// Creating Dots

const dotCreator = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
dotCreator();

dotsContainer.addEventListener("click", function (e) {
  // console.log(e);
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    console.log(slide);
    if (slide === "0") {
      slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
    } else if (slide === "1") {
      slides.forEach(
        (s, i = "1") => (s.style.transform = `translateX(${100 * i}%)`)
      );
    } else {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${-100 * 0}%)`)
      );
    }
  }
});

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
