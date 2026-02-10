const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function showSection(id) {
  sections.forEach(section => {
    section.style.display = section.id === id ? "block" : "none";
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // stop normal scrolling
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
  });
});

/* Show ONLY home on first load */
showSection("home");
