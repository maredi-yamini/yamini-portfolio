function openProject(project) {
    const data = {
      weather: {
        title: "Weather Detection Web App",
        desc: "Real-time weather app using APIs to display live weather conditions.",
        tech: "HTML, CSS, JavaScript, API",
        link: "https://github.com/YOUR-GITHUB/weather-app"
      },
      railway: {
        title: "Automatic Railway Control System",
        desc: "IoT-based safety system using IR sensors to prevent accidents.",
        tech: "IoT, Embedded Systems",
        link: "https://github.com/YOUR-GITHUB/railway-project"
      },
      competitor: {
        title: "Competitor Strategy Tracker",
        desc: "E-commerce competitor analysis using automation with Selenium.",
        tech: "Python, Selenium",
        link: "https://github.com/YOUR-GITHUB/competitor-tracker"
      }
    };
  
    document.getElementById("modalTitle").innerText = data[project].title;
    document.getElementById("modalDesc").innerText = data[project].desc;
    document.getElementById("modalTech").innerText = data[project].tech;
    document.getElementById("modalLink").href = data[project].link;
  
    document.getElementById("projectModal").style.display = "flex";
  }
  
  function closeProject() {
    document.getElementById("projectModal").style.display = "none";
  }
  
