(() => {
  let e = document.querySelectorAll(".style-switcher .colors span");
  e.forEach((e) => {
    e.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow", "show-front");
    });
  }),
    e.forEach((e) => {
      e.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow", "show-front");
      });
    });
  let t = document.querySelector(".style-switcher-toggler");
  t &&
    (t.addEventListener("click", (e) => {
      e.stopPropagation(),
        document.querySelector(".style-switcher").classList.toggle("open");
    }),
    (window.onscroll = function () {
      document.querySelector(".style-switcher").classList.contains("open") &&
        document.querySelector(".style-switcher").classList.remove("open");
    }),
    document.addEventListener("click", () => {
      document.querySelector(".style-switcher").classList.contains("open") &&
        document.querySelector(".style-switcher").classList.remove("open");
    }),
    window.addEventListener("scroll", () => {
      document.querySelector(".style-switcher").classList.contains("open") &&
        document.querySelector(".style-switcher").classList.remove("open");
    }));
})();
const alternateStyles = document.querySelectorAll(".alternate-style");
function changeColor() {
  let e = document.querySelector(".style-switcher-toggler");
  e &&
    alternateStyles.forEach((e) => {
      e.getAttribute("title") === localStorage.getItem("color")
        ? (document.querySelector(".style-switcher").classList.remove("open"),
          e.removeAttribute("disabled"))
        : e.setAttribute("disabled", "true");
    });
}
function setActiveStyle(e) {
  localStorage.setItem("color", e), changeColor();
}
null !== localStorage.getItem("color") && changeColor();
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggler) {
  let e = document.querySelector(".day-night");
  function t() {
    null !== localStorage.getItem("theme") &&
      ("dark" === localStorage.getItem("theme")
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark")),
      s();
  }
  function s() {
    document.body.classList.contains("dark")
      ? (e.querySelector("i").classList.remove("fa-moon"),
        e.querySelector("i").classList.add("fa-sun"))
      : (e.querySelector("i").classList.remove("fa-sun"),
        e.querySelector("i").classList.add("fa-moon"));
  }
  e.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
  }),
    e.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow", "show");
    }),
    e.addEventListener("click", () => {
      document.body.classList.toggle("dark"),
        document.body.classList.contains("dark")
          ? localStorage.setItem("theme", "dark")
          : localStorage.setItem("theme", "light"),
        s();
    }),
    window.addEventListener("load", () => {
      t();
    });
}
