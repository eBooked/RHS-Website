import { getCookie, setCookie } from "./cookieUtils";

function init() {
  document.querySelectorAll("#desktop-site-nav a").forEach((item) => {
    item.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        event.preventDefault();
        item.click();
      }
    });
  });
  document.addEventListener("keydown", (event) => {
    const mobileNav = document.getElementById("mobile-site-nav");
    if (event.key === "Escape" && mobileNav.matches(":popover-open")) {
      mobileNav.hidePopover();
    }
  });
  const themeToggle_s = document.querySelectorAll(".theme-toggle");
  const themeInput_s = document.querySelectorAll(
    '.theme-toggle > [type="checkbox"]'
  );
  function changeTheme(toDark) {
    themeInput_s.forEach((input) => {
      input.checked = toDark;
    });
    setCookie("theme", toDark ? "dark" : "light", 24);
  }
  if (getCookie("theme") === "dark" || getCookie("theme") === "light") {
    changeTheme(getCookie("theme") === "dark");
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      changeTheme(true);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      changeTheme(false);
    }
  }
  function handleThemeToggle(e) {
    const toDark = e.target.checked;
    const label = e.target.closest("label");
    e.preventDefault();
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      changeTheme(toDark);
      return;
    }
    const rect = label.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    const transition = document.startViewTransition({
      update: () => {
        changeTheme(toDark);
      },
      types: ["theme"]
    });
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      document.documentElement.animate(
        { clipPath: clipPath },
        {
          duration: 250,
          easing: "ease-out",
          pseudoElement: "::view-transition-new(root)",
          fill: "forwards"
        }
      );
    });
  }
  themeInput_s.forEach((input) => {
    input.onclick = handleThemeToggle;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
