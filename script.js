const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

let scrollStarted = false;

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPosition < 100) {
    resetCount();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      // Get count target
      const target = Number(counter.getAttribute("data-target"));

      // Get current counter value
      let c = Number(counter.innerText);

      // If counter less than target, add increment
      if (c < target) {
        c++;
        counter.innerText = `${c}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = `${target}`;
      }
    };

    updateCounter();
  });
}

function resetCount() {
  counters.forEach((counter) => (counter.innerText = "0"));
}
