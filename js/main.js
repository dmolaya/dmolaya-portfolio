const translations = {
  es: {
    skip: "Saltar al contenido", menu: "Abrir menú",
    navAbout: "Sobre mí", navProjects: "Proyectos", navToolbox: "Tecnologías", navContact: "Contacto",
    eyebrow: "ANDROID DEVELOPER · PRODUCT BUILDER",
    heroTitle: 'Creo aplicaciones útiles.<br>Resuelvo <span class="accent">problemas reales.</span>',
    heroDescription: "Soy David, desarrollador Android. Me gusta convertir problemas cotidianos en productos digitales claros, útiles y mantenibles.",
    ctaProjects: "Ver proyectos", ctaContact: "Hablemos", emailLink: 'Email <span aria-hidden="true">↗</span>',
    artNote: "Ideas claras.<br>Software útil.", scroll: "Desliza para descubrir",
    aboutEyebrow: "UN POCO SOBRE MÍ",
    aboutTitle: 'Ingeniería con intención.<br><span class="muted">Productos con propósito.</span>',
    aboutLead: "Disfruto construyendo software que sea fácil de entender, mantener y utilizar.",
    aboutBody: "Mi foco está en el desarrollo Android con Kotlin, la arquitectura limpia y las buenas decisiones técnicas. También creo proyectos propios para explorar ideas de principio a fin, desde el problema hasta la experiencia de usuario.",
    principleOne: "Simplicidad antes que complejidad", principleTwo: "Arquitectura preparada para evolucionar", principleThree: "Aprender construyendo",
    projectsEyebrow: "TRABAJO SELECCIONADO", projectsTitle: "Proyectos destacados",
    personalProject: "PROYECTO PERSONAL",
    aquaDescription: "Una aplicación para convertir la hidratación en un hábito sencillo: seguimiento diario, recordatorios y una experiencia visual tranquila.",
    aquaLink: 'Pregúntame por el proyecto <span aria-hidden="true">↗</span>',
    projectNote: "Caso de estudio en preparación. Sustituye esta tarjeta por capturas reales cuando estén listas.",
    moreProjects: "Más proyectos y casos de estudio próximamente.",
    toolboxEyebrow: "HERRAMIENTAS Y ENFOQUE", toolboxTitle: "Mi caja de herramientas",
    toolboxArchitecture: "Arquitectura", toolboxQuality: "Calidad",
    contactEyebrow: "¿TIENES UNA IDEA?",
    contactTitle: 'Hagamos algo<br><span class="accent">que merezca existir.</span>',
    contactDescription: "Estoy abierto a conversar sobre productos, colaboraciones y retos interesantes.",
    contactCta: 'Escríbeme <span aria-hidden="true">↗</span>',
    footer: "Hecho con intención y JavaScript vanilla.", backTop: "Volver arriba ↑"
  },
  en: {
    skip: "Skip to content", menu: "Open menu",
    navAbout: "About", navProjects: "Projects", navToolbox: "Toolbox", navContact: "Contact",
    eyebrow: "ANDROID DEVELOPER · PRODUCT BUILDER",
    heroTitle: 'Building useful apps.<br>Solving <span class="accent">real problems.</span>',
    heroDescription: "I'm David, an Android developer who enjoys turning everyday problems into clear, useful and maintainable digital products.",
    ctaProjects: "Explore projects", ctaContact: "Let's talk", emailLink: 'Email <span aria-hidden="true">↗</span>',
    artNote: "Clear ideas.<br>Useful software.", scroll: "Scroll to explore",
    aboutEyebrow: "A LITTLE ABOUT ME",
    aboutTitle: 'Engineering with intent.<br><span class="muted">Products with purpose.</span>',
    aboutLead: "I enjoy building software that is easy to understand, maintain and use.",
    aboutBody: "My focus is Android development with Kotlin, clean architecture and thoughtful technical decisions. I also build independent projects to explore ideas end to end, from the problem to the user experience.",
    principleOne: "Simplicity over complexity", principleTwo: "Architecture built to evolve", principleThree: "Learn by building",
    projectsEyebrow: "SELECTED WORK", projectsTitle: "Featured projects",
    personalProject: "PERSONAL PROJECT",
    aquaDescription: "An app designed to make hydration a simple habit through daily tracking, reminders and a calm visual experience.",
    aquaLink: 'Ask me about the project <span aria-hidden="true">↗</span>',
    projectNote: "Case study in progress. Replace this card with real screenshots when they're ready.",
    moreProjects: "More projects and case studies coming soon.",
    toolboxEyebrow: "TOOLS AND APPROACH", toolboxTitle: "My toolbox",
    toolboxArchitecture: "Architecture", toolboxQuality: "Quality",
    contactEyebrow: "HAVE AN IDEA?",
    contactTitle: 'Let’s build something<br><span class="accent">worth existing.</span>',
    contactDescription: "I'm open to conversations about products, collaborations and interesting challenges.",
    contactCta: 'Get in touch <span aria-hidden="true">↗</span>',
    footer: "Made with intent and vanilla JavaScript.", backTop: "Back to top ↑"
  }
};

const languageToggle = document.querySelector(".language-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
let currentLanguage = "es";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = translations[language][element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  languageToggle.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
  try { localStorage.setItem("portfolio-language", language); } catch (_) { /* Storage may be unavailable. */ }
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav.classList.toggle("is-open", !isOpen);
});
primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(".section-heading, .about-content, .project-card, .toolbox-item, .contact-section");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((target) => target.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => revealObserver.observe(target));
}

try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "en" || savedLanguage === "es") setLanguage(savedLanguage);
} catch (_) { /* Use Spanish as the default language. */ }
