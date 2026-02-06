const roles = [
    "Java Developer",
    "Full Stack Developer"
  ];
  
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;
  
  function typeEffect() {
    const typingSpan = document.querySelector(".typing");
  
    if (!isDeleting && charIndex <= roles[index].length) {
      currentText = roles[index].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
      currentText = roles[index].substring(0, charIndex--);
    }
  
    typingSpan.textContent = currentText;
  
    if (charIndex === roles[index].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }
  
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
  
  typeEffect();
  
