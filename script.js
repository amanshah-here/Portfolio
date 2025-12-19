function menuFunction() {
  let menuBtn = document.getElementById("navMenu");

  if (menuBtn.className == "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Scroll effect - add box shadow to navbar

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("nav");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// Typing effect

let typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Engineer", "Learner"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

//Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Home
sr.reveal(" .featured-text-card", {});
sr.reveal(" .featured-name", { delay: 100 });
sr.reveal(" .featured-text-info", { delay: 200 });
sr.reveal(" .featured-text-btn", { delay: 200 });
sr.reveal(" .socials", { delay: 200 });
sr.reveal(" .featured-image", { delay: 300 });

// project box
sr.reveal(" .project-box", { interval: 200 });

// Heading
sr.reveal(" .top-header", {});

// About info

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(" .about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// About skills

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(" .skills-box", { delay: 100 });
srRight.reveal(" .form-control", { delay: 100 });

// Change active links

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    const link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
