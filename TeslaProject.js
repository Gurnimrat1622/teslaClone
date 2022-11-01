const main = document.querySelector(".div1");
const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const slide = document.querySelector(".hidden-slide");

menu.addEventListener("click", () => {
  blurs.classList.add("active");
  slide.classList.add("active");
});

menu.addEventListener("click", () => {
  blurs.classList.add("active");
  slide.classList.add("active");
});
cross.addEventListener("click", () => {
  blurs.classList.remove("active");
  slide.classList.remove("active");
});

const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");
const h5 = document.querySelector(".head-5");
const h6 = document.querySelector(".head-6");
const h7 = document.querySelector(".head-7");
const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");
const l5 = document.querySelector(".login-5");
const l6 = document.querySelector(".login-6");
const l7 = document.querySelector(".login-7");

main.addEventListener("scroll", () => {
  console.log(main.scrollTop);
  const unit = main.scrollTop;
  if (unit == 0 && unit < 100) {
    h1.classList.remove("hide");
    l1.classList.remove("hide");
  } else {
    h1.classList.add("hide");
    l1.classList.add("hide");
  }
  if (unit > 600 && unit < 760) {
    h2.classList.add("active");
    l2.classList.add("active");
  } else {
    h2.classList.remove("active");
    l2.classList.remove("active");
  }
  if (unit > 1300 && unit < 1500) {
    h3.classList.add("active");
    l3.classList.add("active");
  } else {
    h3.classList.remove("active");
    l3.classList.remove("active");
  }
  if (unit > 1900 && unit < 2250) {
    h4.classList.add("active");
    l4.classList.add("active");
  } else {
    h4.classList.remove("active");
    l4.classList.remove("active");
  }
  if (unit > 2600 && unit < 2990) {
    h5.classList.add("active");
    l5.classList.add("active");
  } else {
    h5.classList.remove("active");
    l5.classList.remove("active");
  }
  if (unit > 3200 && unit < 3750) {
    h6.classList.add("active");
    l6.classList.add("active");
  } else {
    h6.classList.remove("active");
    l6.classList.remove("active");
  }
  if (unit > 4350 && unit < 4500) {
    h7.classList.add("active");
    l7.classList.add("active");
  } else {
    h7.classList.remove("active");
    l7.classList.remove("active");
  }
});
