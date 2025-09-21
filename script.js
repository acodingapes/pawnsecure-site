// Mobile menu toggle
 const menuToggle = document.querySelector(".menu-toggle");
 const navLinks = document.querySelector(".nav-links");
 if (menuToggle) {
 menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("show");
 });
}
 // Simple form alert (demo only)
 const form = document.querySelector(".contact-form");
 if (form) {
 form.addEventListener("submit", (e) => {
 e.preventDefault();
 alert("Your message has been sent! (demo only)");
 });
}