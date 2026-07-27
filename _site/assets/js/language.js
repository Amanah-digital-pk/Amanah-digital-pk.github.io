
(() => {
  const STORAGE_KEY = "amanah-language";
  const preferred = localStorage.getItem(STORAGE_KEY) || "ur";

  const labels = {
    ur: {
      home: "ہوم",
      services: "خدمات",
      trust: "اعتماد اور تصدیق",
      about: "ہمارے بارے میں",
      app: "أمانة ایپ کھولیں",
      privacy: "رازداری",
      terms: "شرائط",
      footerPromise: "ہر خدمت۔ ہر شہر۔ بنیاد اعتماد پر۔"
    },
    en: {
      home: "Home",
      services: "Services",
      trust: "Trust & Verification",
      about: "About",
      app: "Open Amanah App",
      privacy: "Privacy",
      terms: "Terms",
      footerPromise: "Every service. Every city. Built on trust."
    }
  };

  const assetUrl = path => new URL(path, document.baseURI).href;

  function translateChrome(lang) {
    const t = labels[lang];
    const pages = {
      "index.html": t.home,
      "services.html": t.services,
      "trust.html": t.trust,
      "about.html": t.about
    };

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      const href = (link.getAttribute("href") || "").split("/").pop() || "index.html";
      if (pages[href]) link.textContent = pages[href];
      if ((link.getAttribute("href") || "").includes("/app/")) link.textContent = t.app;
    });

    const logo = document.querySelector(".navbar-brand img, .navbar-logo");
    if (logo) {
      logo.src = assetUrl(
        lang === "ur"
          ? "assets/brand/amanah-navbar-ur.svg"
          : "assets/brand/amanah-navbar-en.svg"
      );
      logo.alt = lang === "ur" ? "أمانة ڈیجیٹل" : "Amanah Digital";
    }

    document.querySelectorAll("footer a").forEach(link => {
      const href = link.getAttribute("href") || "";
      if (href.includes("privacy")) link.textContent = t.privacy;
      if (href.includes("terms")) link.textContent = t.terms;
    });

    document.querySelectorAll(".nav-footer-center, .footer-center")
      .forEach(el => el.textContent = t.footerPromise);
  }

  function setLanguage(lang) {
    const root = document.documentElement;
    root.dataset.lang = lang;
    root.lang = lang;
    root.dir = lang === "ur" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-lang-block]").forEach(el => {
      const active = el.dataset.langBlock === lang;
      el.hidden = !active;
      el.style.display = active ? "" : "none";
    });

    document.querySelectorAll(".language-switch button").forEach(btn => {
      const active = btn.dataset.langChoice === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    translateChrome(lang);
    root.classList.add("language-ready");
  }

  function installSwitch() {
    if (document.querySelector(".language-switch")) return;

    const switcher = document.createElement("div");
    switcher.className = "language-switch";
    switcher.setAttribute("aria-label", "زبان / Language");
    switcher.innerHTML = `
      <button type="button" data-lang-choice="ur">اردو</button>
      <button type="button" data-lang-choice="en">English</button>
    `;

    switcher.addEventListener("click", event => {
      const button = event.target.closest("button[data-lang-choice]");
      if (button) setLanguage(button.dataset.langChoice);
    });

    const rightNav = document.querySelector(".navbar-nav.ms-auto");
    if (rightNav) rightNav.prepend(switcher);
    else document.querySelector(".navbar-container")?.appendChild(switcher);
  }

  document.addEventListener("DOMContentLoaded", () => {
    installSwitch();
    setLanguage(preferred);
  });
})();
