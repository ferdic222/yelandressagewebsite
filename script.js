(function () {
  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hero carousel – roll left every 5s
  var carousel = document.querySelector("[data-carousel]");
  if (carousel) {
    var track = carousel.querySelector(".carousel-track");
    var slides = carousel.querySelectorAll(".carousel-slide");
    var total = slides.length;
    var index = 0;
    if (track && total > 0) {
      setInterval(function () {
        index = (index + 1) % total;
        track.style.transform = "translateX(-" + index * 100 + "%)";
      }, 5000);
    }
  }

  // Mobile nav toggle
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("nav-open");
    });
  }

  // Horse wellness tabs
  var tabsEl = document.querySelector("[data-tabs]");
  if (tabsEl) {
    var buttons = tabsEl.querySelectorAll(".tab-btn");
    var panels = tabsEl.querySelectorAll(".tab-panel");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = this.getAttribute("data-tab");
        buttons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        panels.forEach(function (p) {
          p.classList.remove("active");
        });
        this.classList.add("active");
        this.setAttribute("aria-selected", "true");
        var panel = tabsEl.querySelector("#panel-" + target);
        if (panel) panel.classList.add("active");
      });
    });
  }
})();
