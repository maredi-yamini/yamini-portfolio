const text = "Java & Full Stack Developer";
let index = 0;
let isDeleting = false;
const speed = 100;

function typeEffect() {
  const typing = document.querySelector(".typing");

  if (!isDeleting) {
    typing.textContent = text.slice(0, index++);
    if (index > text.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    typing.textContent = text.slice(0, index--);
    if (index === 0) isDeleting = false;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
