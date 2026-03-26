import "./style.css";
import { slides } from "./slides.js";

const deck = document.getElementById("deck");
let current = 0;

// Render all slides into the DOM
slides.forEach((html, i) => {
  const div = document.createElement("div");
  div.className = "slide";
  div.innerHTML = html;
  if (i === 0) div.classList.add("active");
  deck.appendChild(div);
});

const allSlides = document.querySelectorAll(".slide");

function goTo(n) {
  if (n < 0 || n >= allSlides.length) return;
  allSlides[current].classList.remove("active");
  current = n;
  allSlides[current].classList.add("active");
  document.title = `Slide ${current + 1} / ${allSlides.length}`;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") goTo(current + 1);
  if (e.key === "ArrowLeft") goTo(current - 1);
  if (e.key === "Home") goTo(0);
  if (e.key === "End") goTo(allSlides.length - 1);
});

// Fullscreen toggle
const fsBtn = document.getElementById("fullscreen-btn");
const fsIcon = fsBtn.querySelector(".material-symbols-outlined");

fsBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

function scaleSlide() {
  if (!document.fullscreenElement) return;
  const scaleX = window.innerWidth / 1280;
  const scaleY = window.innerHeight / 720;
  const scale = Math.min(scaleX, scaleY);
  document.documentElement.style.setProperty("--fs-scale", scale);
}

document.addEventListener("fullscreenchange", () => {
  const fs = !!document.fullscreenElement;
  document.body.classList.toggle("is-fullscreen", fs);
  fsIcon.textContent = fs ? "fullscreen_exit" : "fullscreen";
  if (fs) scaleSlide();
  else document.documentElement.style.removeProperty("--fs-scale");
});

window.addEventListener("resize", scaleSlide);

// Touch swipe support
let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    dx < 0 ? goTo(current + 1) : goTo(current - 1);
  }
});
