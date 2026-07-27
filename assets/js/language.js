(() => {
  const STORAGE_KEY = "amanah-language";
  const initial = localStorage.getItem(STORAGE_KEY) || "ur";

  const assetUrl = (path) => new URL(path, document.baseURI).href;

  function updateLanguageText(lang) {
    document.querySelectorAll("[data-en][data-ur]").forEach((el) => {
      el.textContent = lang === "ur" ? el.dataset.ur : el.dataset.en;
    });
  }

  function updatePageBlocks(lang) {
    document.querySelectorAll("[data-lang-block]").forEach((el) => {
      const visible = el.dataset.langBlock === lang;
      el.hidden = !visible;
      el.style.display = visible ? "" : "none";
    });
  }

  function updateFooter(lang) {
    const labels = lang === "ur"
      ? {privacy: "رازداری", terms: "شرائط", promise: "ہر خدمت۔ ہر شہر۔ بنیاد اعتماد پر۔"}
      : {privacy: "Privacy", terms: "Terms", promise: "Every service. Every city. Built on trust."};

    document.querySelectorAll("footer a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.includes("privacy")) link.textContent = labels.privacy;
      if (href.includes("terms")) link.textContent = labels.terms;
    });
    document.querySelectorAll(".nav-footer-center, .footer-center")
      .forEach((el) => { el.textContent = labels.promise; });
  }

  function updateActivePage() {
    const page = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
    document.querySelectorAll("[data-page]").forEach((link) => {
      link.classList.toggle("active", link.dataset.page === page);
    });
  }

  function setLanguage(lang) {
    const root = document.documentElement;
    root.dataset.lang = lang;
    root.lang = lang;
    root.dir = lang === "ur" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll(".language-switch button").forEach((button) => {
      const active = button.dataset.langChoice === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    updateLanguageText(lang);
    updatePageBlocks(lang);
    updateFooter(lang);
    updateActivePage();
    root.classList.add("language-ready");
  }

  function setupHeader() {
    document.querySelectorAll(".language-switch button").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.langChoice));
    });

    const toggle = document.querySelector(".amanah-menu-toggle");
    const panel = document.getElementById("amanah-mobile-panel");
    if (toggle && panel) {
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
      panel.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          toggle.setAttribute("aria-expanded", "false");
          panel.hidden = true;
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupHeader();
    setLanguage(initial);
  });
})();
