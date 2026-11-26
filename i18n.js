(function () {
  function detectInitialLang() {
    var params = new URLSearchParams(window.location.search);
    var queryLang = params.get("lang");
    if (queryLang === "en" || queryLang === "zh") return queryLang;
    try {
      var saved = localStorage.getItem("beavergo_site_lang");
      if (saved === "en" || saved === "zh") return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("data-current-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    var titleEl = document.querySelector("title");
    if (titleEl) {
      var t = titleEl.getAttribute("data-title-" + lang);
      if (t) document.title = t;
    }
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });
    try {
      localStorage.setItem("beavergo_site_lang", lang);
    } catch (e) {}
  }

  var initial = detectInitialLang();
  document.documentElement.setAttribute("data-current-lang", initial);

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(initial);
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-set-lang"));
      });
    });
  });
})();
