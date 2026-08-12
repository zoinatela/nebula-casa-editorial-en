(function () {
  "use strict";
  var sticky = document.querySelector("[data-sticky-cta]");
  var hero = document.querySelector(".hero");
  if (sticky && hero) {
    document.body.classList.add("has-sticky-cta");
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        sticky.classList.toggle("is-visible", !entry.isIntersecting);
      });
    }, { threshold: 0.12 }).observe(hero);
  }
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
