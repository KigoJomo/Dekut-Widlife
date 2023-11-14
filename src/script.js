const sections = document.querySelectorAll("section");
const container = document.getElementById("container");
const section_links = document.querySelectorAll(".section_link");

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

function handleScroll() {
  sections.forEach((section) => {
    if (elementIsVisibleInViewport(section)) {
      const sectionId = section.id;
      const section_link = document.querySelector(`a[href="#${sectionId}"]`);
      section_links.forEach((link) => link.classList.remove("active"));
      section_link.classList.add("active");
    }
  });
}
window.addEventListener("DOMContentLoaded", handleScroll);
container.addEventListener("scroll", handleScroll);

const scroll_forward = document.querySelector(".arrow_forward");
const scroll_back = document.querySelector(".arrow_back");
const slidesContainer = document.querySelector(".slides");

function scrollSlides(direction) {
  const scrollAmount = 100; // Adjust as needed

  if (direction === "left") {
    slidesContainer.scrollBy(-scrollAmount, 0);
  } else if (direction === "right") {
    slidesContainer.scrollBy(scrollAmount, 0);
  }
}

scroll_back.addEventListener("click", () => {
  scrollSlides("left");
});
scroll_forward.addEventListener("click", () => {
  scrollSlides("right");
});

const event_links = document.querySelectorAll(".event-link");
const event_tint = document.getElementById("event-tint");
const event_form = document.getElementById("event_form");

event_links.forEach(link => {
  link.addEventListener("click", () => {
    event_tint.classList.add("tint-visible");
    event_form.style.display = "flex";
  });
});
event_tint.addEventListener("click", () => {
  event_tint.classList.remove("tint-visible");
  event_form.style.display = "none";
});

const reg_btn = document.getElementById("reg-btn");
const reg_form = document.getElementById("reg-form");
const join_tint = document.getElementById("join-tint");

reg_btn.addEventListener("click", () => {
  join_tint.classList.add("tint-visible");
  reg_form.style.display = "flex";
});

join_tint.addEventListener("click", () => {
  join_tint.classList.remove("tint-visible");
  reg_form.style.display = "none";
});
