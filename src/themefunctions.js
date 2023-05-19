import "./style.css";

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
