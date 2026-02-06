const roles = ["Java & Full Stack Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingSpan = document.querySelector(".typing");
  const role = roles[index];

  if (!isDeleting && charIndex <= role.length) {
    currentText = role.substring(0, charIndex++);
  } else if (isDeleting && charIndex >= 0) {
    currentText = role.substring(0, charIndex--);
  }

  typingSpan.textContent = currentText;

  if (charIndex === role.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
