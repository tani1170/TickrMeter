import "./style.css";
/* Import af Motion One bibliotek */
import {
  animate,
  inView,
  scroll,
  stagger,
} from "motion";

// import Alpine from "alpinejs";
// window.Alpine = Alpine;
// Alpine.start();

inView(
  ".stagger-slide-in",
  ({ target }) => {
    animate(
      target.querySelectorAll(
        ".slide-element"
      ),
      { x: [-2000, 0] },
      {
        duration: 1,
        delay: stagger(1, {
          start: 0.09,
        }),
      }
    );
  }
);
inView(".fotofromtop", () => {
  animate(
    ".fotofromtop",
    { y: [-100, 0] },
    { duration: 2 }
  );
});

inView(".fotofromright", () => {
  animate(
    ".fotofromright",
    { x: [2000, 0] },
    { duration: 1 }
  );
});

inView(".fotofromright2", () => {
  animate(
    ".fotofromright2",
    { x: [2000, 0] },
    { duration: 1 }
  );
});

inView(".fotofromright3", () => {
  animate(
    ".fotofromright3",
    { x: [2000, 0] },
    { duration: 1 }
  );
});

inView(".fotofromright4", () => {
  animate(
    ".fotofromright4",
    { x: [2000, 0] },
    { duration: 1 }
  );
});

inView(".fotofromright5", () => {
  animate(
    ".stefotofromright5p4",
    { x: [2000, 0] },
    { duration: 1 }
  );
});

inView(".fotofromright6", () => {
  animate(
    ".fotofromright6",
    { x: [2000, 0] },
    { duration: 1 }
  );
});

inView(".guideside", () => {
  scroll(
    animate(".progress-bar", {
      scaleX: [0, 1],
    })
  );
});

// STYRER DARK MODE -----------------
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches)
) {
  document.documentElement.classList.add(
    "dark"
  );
} else {
  document.documentElement.classList.remove(
    "dark"
  );
}

function setDarkTheme() {
  document.documentElement.classList.add(
    "dark"
  );
  localStorage.theme = "dark";
}

function setLightTheme() {
  document.documentElement.classList.remove(
    "dark"
  );
  localStorage.theme = "light";
}

function onThemeSwitcherItemClick(
  event
) {
  const theme =
    event.target.dataset.theme;

  if (theme === "system") {
    localStorage.removeItem("theme");
    setSystemTheme();
  } else if (theme === "dark") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

// Funktion til at skifte mellem temaer

var root = document.documentElement,
  theme =
    window
      .getComputedStyle(root)
      .getPropertyValue("--light") ===
    " "
      ? "dark"
      : "light";

document
  .getElementById("toggle-theme")
  .addEventListener(
    "click",
    toggleTheme
  );

function toggleTheme() {
  root.classList.remove(theme);
  theme =
    theme === "dark" ? "light" : "dark";
  root.classList.add(theme);
}
