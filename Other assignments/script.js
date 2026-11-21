// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Menu category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("selected", item === button));
    dishes.forEach(dish => {
      dish.hidden = filter !== "all" && dish.dataset.category !== filter;
    });
  });
});

// Contact form demo feedback (connect a backend or form service for real submissions)
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  formNote.textContent = "Thanks! This demo form is ready to be connected to your email or backend service.";
  formNote.classList.add("form-success");
  contactForm.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
